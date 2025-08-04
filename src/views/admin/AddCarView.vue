<script setup>
import { reactive, ref } from "vue";
import { useCarStore } from "@/stores/useCarStore.js";

const carStore = useCarStore();

const form = reactive({
  brand: "",
  model: "",
  year: 0,
  mileage: 0,
  price: 0,
  fuelType: "",
  transmission: "",
  condition: "",
  images: [],
  engine: "",
  color: "",
  doors: 4,
});

const snackbar = ref(false);
const snackbarText = ref("");
const inputFiles = ref(null);

function onFilesChange(event) {
  const files = event.target.files;
  if (!files.length) return;

  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      form.images.push(e.target.result);
    };
    reader.readAsDataURL(file);
  });

  // Limpio el input para permitir subir mismos archivos si querés
  if (inputFiles.value) inputFiles.value.value = null;
}

function removeImage(index) {
  form.images.splice(index, 1);
}

function submit() {
  const car = {
    ...form,
    year: Number(form.year),
    mileage: Number(form.mileage),
    price: Number(form.price),
    doors: Number(form.doors),
    images:
      form.images.length > 0
        ? form.images
        : ["https://placehold.co/400x300?text=Sin+imagen"],
    image:
      form.images.length > 0
        ? form.images[0]
        : "https://placehold.co/400x300?text=Sin+imagen",
  };

  carStore.addCar(car);
  snackbarText.value = "Auto agregado con éxito!";
  snackbar.value = true;

  Object.keys(form).forEach((key) =>
    key === "doors"
      ? (form[key] = 4)
      : Array.isArray(form[key])
      ? (form[key] = [])
      : (form[key] = "")
  );
  if (inputFiles.value) inputFiles.value.value = null;
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

            <div class="mb-4">
              <label class="d-block font-weight-medium mb-2">
                Imágenes (puedes subir varias)
              </label>
              <input
                ref="inputFiles"
                type="file"
                multiple
                accept="image/*"
                @change="onFilesChange"
              />
            </div>

            <v-row class="mb-4" dense>
              <v-col
                v-for="(img, i) in form.images"
                :key="i"
                cols="4"
                class="position-relative"
              >
                <v-img :src="img" height="100" contain class="rounded" />
                <v-btn
                  icon
                  x-small
                  class="position-absolute top-0 right-0 ma-1"
                  @click="removeImage(i)"
                  aria-label="Eliminar imagen"
                  style="
                    min-width: 0;
                    padding: 0;
                    background-color: transparent;
                  "
                  :ripple="false"
                  variant="plain"
                >
                  <v-icon color="red" style="font-size: 16px">mdi-close-thick</v-icon>
                </v-btn>
              </v-col>
            </v-row>

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
      color="success"
      elevation="4"
      location="center"
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

<style scoped>
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
</style>
