<script setup>
import { reactive, ref } from "vue";
import { useCarStore } from "@/stores/useCarStore.js";

const carStore = useCarStore();

const form = reactive({
  brand: "",
  model: "",
  year: "",
  mileage: 0,
  price: 0,
  fuelType: "",
  transmission: "",
  condition: "",
  image: "",
  engine: "",
  color: "",
  doors: 4,
});

const snackbar = ref(false);
const snackbarText = ref("");

function submit() {
  const car = {
    ...form,
    year: Number(form.year),
    mileage: Number(form.mileage),
    price: Number(form.price),
    doors: Number(form.doors),
    image: form.image || "https://placehold.co/400x300?text=Sin+imagen",
  };

  carStore.addCar(car);
  snackbarText.value = "Auto agregado con éxito!";
  snackbar.value = true;

  Object.keys(form).forEach((key) => (form[key] = key === "doors" ? 4 : ""));
}
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="2" class="pa-6">
          <v-form @submit.prevent="submit">
            <v-text-field v-model="form.brand" label="Marca" required />
            <v-text-field v-model="form.model" label="Modelo" required />
            <v-text-field
              v-model="form.year"
              label="Año"
              type="number"
              required
              class="no-spinner"
            />
            <v-text-field
              v-model="form.mileage"
              label="Kilometraje"
              type="number"
              required
              class="no-spinner"
            />
            <v-text-field
              v-model="form.price"
              label="Precio"
              prefix="$"
              type="number"
              required
              class="no-spinner"
            />
            <v-select
              v-model="form.fuelType"
              :items="[
                'Nafta',
                'Nafta + GNC',
                'Diésel',
                'Híbrido',
                'Eléctrico',
              ]"
              label="Tipo de Combustible"
              required
            />
            <v-select
              v-model="form.transmission"
              :items="['Manual', 'Automática']"
              label="Transmisión"
              required
            />
            <v-select
              v-model="form.condition"
              :items="['Nuevo', 'Usado']"
              label="Condición"
              required
            />
            <v-text-field v-model="form.image" label="URL Imagen" />
            <v-text-field v-model="form.engine" label="Motor" required />
            <v-text-field v-model="form.color" label="Color" required />
            <v-text-field
              v-model="form.doors"
              label="Puertas"
              type="number"
              required
              class="no-spinner"
            />
            <v-btn type="submit" color="primary" class="mt-4 text-white" block>
              Agregar auto
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      top
      right
      color="success"
      elevation="4"
    >
      {{ snackbarText }}
      <template #action>
        <v-btn icon @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>