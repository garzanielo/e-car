<script setup>
import { useRoute, useRouter } from "vue-router";
import { cars as mockCars } from "@/utils/mockCars.js";
import { useCarStore } from "@/stores/useCarStore.js";
import { computed, ref, watch } from "vue";

const carStore = useCarStore();

const carDetails = {
  engine: { text: "Motor", icon: "mdi-engine" },
  fuelType: { text: "Combustible", icon: "mdi-gas-station" },
  transmission: { text: "Transmisión", icon: "mdi-car-shift-pattern" },
  mileage: { text: "Kilometraje", icon: "mdi-speedometer" },
  color: { text: "Color", icon: "mdi-palette" },
  doors: { text: "Puertas", icon: "mdi-car-door" },
};

const route = useRoute();
const router = useRouter();

const allCars = computed(() => {
  const storeIds = new Set(carStore.cars.map((c) => c.id));
  return [...carStore.cars, ...mockCars.filter((c) => !storeIds.has(c.id))];
});

const carId = ref(parseInt(route.params.id));
const car = ref(allCars.value.find((c) => c.id === carId.value) || null);

watch(
  () => route.params.id,
  (newId) => {
    carId.value = parseInt(newId);
    car.value = allCars.value.find((c) => c.id === carId.value) || null;
  }
);

const relatedCars = computed(() => {
  if (!car.value) return [];
  return allCars.value.filter(
    (c) =>
      c.id !== car.value.id &&
      (c.brand === car.value.brand ||
        Math.abs(c.price - car.value.price) <= 5000)
  );
});

function goBack() {
  router.push("/catalog");
}
</script>

<template>
  <v-container class="py-10">
    <v-btn
      color="primary"
      class="mb-6"
      rounded
      @click="goBack"
      aria-label="Volver al catálogo"
    >
      ← Volver al catálogo
    </v-btn>

    <v-row>
      <v-col cols="12" md="6">
        <v-img
          v-if="car"
          :src="car.image"
          alt="Car Image"
          class="rounded-xl"
          height="400"
          cover
        />
      </v-col>

      <v-col cols="12" md="6" v-if="car">
        <h2 class="text-h4 font-weight-bold mb-2">
          {{ car.brand }} {{ car.model }}
        </h2>
        <p class="text-subtitle-1 text--secondary mb-4">
          {{ car.year }} • {{ car.condition }}
        </p>
        <h3 class="text-h5 font-weight-bold text-primary mb-6">
          $ {{ car.price.toLocaleString() }}
        </h3>

        <v-divider class="mb-4" />

        <v-row dense>
          <v-col cols="6" v-for="(label, key) in carDetails" :key="key">
            <v-icon class="mr-2">{{ label.icon }}</v-icon>
            <strong>{{ label.text }}:</strong> {{ car[key] }}
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider class="my-10" />

    <h3 class="text-h5 font-weight-semibold mb-6">Autos Relacionados</h3>
    <v-row>
      <v-col
        v-for="related in relatedCars"
        :key="related.id"
        cols="12"
        sm="6"
        md="4"
      >
        <router-link :to="`/car/${related.id}`" class="no-underline">
          <v-card class="hover:scale-105 transition" elevation="3" hover>
            <v-img :src="related.image" height="200px" cover />
            <v-card-title>
              {{ related.brand }} {{ related.model }}
            </v-card-title>
            <v-card-subtitle>
              $ {{ related.price.toLocaleString() }}
            </v-card-subtitle>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-icon {
  font-size: 20px;
  vertical-align: middle;
}
.no-underline {
  text-decoration: none;
  color: inherit;
}
.hover\:scale-105 {
  transition: transform 0.3s ease;
}
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
