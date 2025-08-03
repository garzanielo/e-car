<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const hasUnread = ref(false);

function goToAddCar() {
  router.push("/admin/add-car");
}

function goToRemoveCar() {
  router.push("/admin/remove-car");
}

function goToClientRequests() {
  router.push("/admin/client-requests");
}

function logout() {
  localStorage.removeItem("isAdmin");
  router.push("/");
}

onMounted(() => {
  const stored = localStorage.getItem("clientMessages");
  if (stored) {
    const messages = JSON.parse(stored);
    hasUnread.value = messages.some((msg) => !msg.read);
  }
});
</script>

<template>
  <v-container class="py-12">
    <v-row class="text-center mb-8">
      <v-col>
        <v-icon size="48" color="primary">mdi-shield-account</v-icon>
        <h1 class="text-h4 font-weight-bold mt-2">Panel de Administración</h1>
        <p class="text-subtitle-1 mt-2">
          Desde aquí podés gestionar el catálogo de autos y ver las solicitudes
          de los clientes.
        </p>

        <v-btn
          color="grey"
          class="mt-4"
          @click="logout"
          prepend-icon="mdi-logout"
        >
          Cerrar sesión
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="4">
        <v-card class="pa-6 text-center" elevation="3">
          <v-icon size="36" color="green">mdi-plus-box</v-icon>
          <h3 class="text-h6 font-weight-bold mt-2 mb-4">Agregar Auto</h3>
          <v-btn color="primary" block @click="goToAddCar">Ir a agregar</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-6 text-center" elevation="3">
          <v-icon size="36" color="red">mdi-delete</v-icon>
          <h3 class="text-h6 font-weight-bold mt-2 mb-4">Eliminar Auto</h3>
          <v-btn color="error" block @click="goToRemoveCar"
            >Ir a eliminar</v-btn
          >
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card
          class="pa-6 text-center"
          elevation="3"
          style="position: relative"
        >
          <v-icon
            v-if="hasUnread"
            color="red"
            style="position: absolute; top: 10px; right: 10px"
          >
            mdi-bell-alert
          </v-icon>

          <v-icon size="36" color="blue">mdi-email</v-icon>
          <h3 class="text-h6 font-weight-bold mt-2 mb-4">
            Solicitudes de Contacto
          </h3>
          <v-btn color="info" block @click="goToClientRequests">
            Ver mensajes
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
