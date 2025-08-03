<script setup>
import { ref, onMounted } from "vue";

const messages = ref([]);
const selectedMessage = ref(null);
const dialog = ref(false);

const confirmDeleteDialog = ref(false);
const messageToDeleteIndex = ref(null);

onMounted(() => {
  const stored = localStorage.getItem("clientMessages");
  if (stored) {
    messages.value = JSON.parse(stored).reverse();
  }
});

function markAsRead(index) {
  if (!messages.value[index].read) {
    messages.value[index].read = true;
    saveToStorage();
  }
}

function openMessage(msg, index) {
  selectedMessage.value = msg;
  dialog.value = true;
  markAsRead(index);
}

function saveToStorage() {
  const copy = [...messages.value].reverse();
  localStorage.setItem("clientMessages", JSON.stringify(copy));
}

function requestDeleteMessage(index) {
  messageToDeleteIndex.value = index;
  confirmDeleteDialog.value = true;
}

function deleteMessage() {
  if (messageToDeleteIndex.value !== null) {
    messages.value.splice(messageToDeleteIndex.value, 1);
    saveToStorage();
    confirmDeleteDialog.value = false;
    messageToDeleteIndex.value = null;
  }
}

function cancelDelete() {
  confirmDeleteDialog.value = false;
  messageToDeleteIndex.value = null;
}
</script>

<template>
  <v-container class="py-12">
    <h1 class="text-h5 font-weight-bold mb-6">Solicitudes de Contacto</h1>

    <div v-if="messages.length === 0" class="text-subtitle-1 text-grey">
      No se han recibido mensajes aún.
    </div>

    <v-row v-else>
      <v-col cols="12" md="6" v-for="(msg, index) in messages" :key="index">
        <v-card class="mb-4" elevation="2" style="position: relative">
          <v-icon
            v-if="!msg.read"
            color="red"
            style="position: absolute; top: 10px; right: 10px"
          >
            mdi-bell-alert
          </v-icon>

          <v-card-title class="text-h6">{{ msg.name }}</v-card-title>
          <v-card-subtitle class="text-caption">
            {{ msg.email }} – {{ new Date(msg.timestamp).toLocaleString() }}
            <br />
            📞 {{ msg.phone }}
          </v-card-subtitle>

          <v-card-actions>
            <v-btn @click="openMessage(msg, index)" text color="primary">
              Ver mensaje
            </v-btn>
          </v-card-actions>

          <v-btn
            v-if="msg.read"
            icon
            color="red"
            style="position: absolute; bottom: 10px; right: 10px"
            @click="requestDeleteMessage(index)"
            aria-label="Eliminar mensaje"
            title="Eliminar mensaje"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="text-h6">{{ selectedMessage?.name }}</v-card-title>
        <v-card-subtitle class="text-caption">
          {{ selectedMessage?.email }} –
          {{ new Date(selectedMessage?.timestamp).toLocaleString() }}
          <br />
          📞 {{ selectedMessage?.phone }}
        </v-card-subtitle>
        <v-card-text class="mt-4 white-space-pre-line">
          {{ selectedMessage?.message }}
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDeleteDialog" max-width="400">
      <v-card>
        <v-card-title class="text-h6">Confirmación</v-card-title>
        <v-card-text>¿Está seguro que quiere eliminar el mensaje?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="cancelDelete">No</v-btn>
          <v-btn color="red" text @click="deleteMessage">Sí</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.white-space-pre-line {
  white-space: pre-line;
}
</style>
