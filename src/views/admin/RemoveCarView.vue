<script setup>
import { ref } from 'vue'
import { useCarStore } from '@/stores/useCarStore.js'

const carStore = useCarStore()
const dialog = ref(false)
const carToRemove = ref(null)

function confirmRemove(car) {
  carToRemove.value = car
  dialog.value = true
}

function removeCar() {
  if (carToRemove.value) {
    carStore.removeCar(carToRemove.value.id)
    dialog.value = false
    carToRemove.value = null
  }
}

function cancelRemove() {
  dialog.value = false
  carToRemove.value = null
}
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card>
          <v-card-title class="text-h6">Autos disponibles para eliminar</v-card-title>
          <v-divider></v-divider>
          <v-list>
            <v-list-item
              v-for="car in carStore.cars"
              :key="car.id"
              class="d-flex justify-space-between"
            >
              
                <v-list-item-title>
                  {{ car.brand }} {{ car.model }} ({{ car.year }})
                </v-list-item-title>
                <v-list-item-subtitle>
                  Precio: ${{ car.price.toLocaleString() }}
                </v-list-item-subtitle>
              

              <v-list-item-action>
                <v-btn icon color="error" @click="confirmRemove(car)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Confirmar eliminación</v-card-title>
        <v-card-text>
          ¿Estás seguro que querés eliminar
          <strong>{{ carToRemove?.brand }} {{ carToRemove?.model }}</strong>?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="cancelRemove">Cancelar</v-btn>
          <v-btn color="error" text @click="removeCar">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
