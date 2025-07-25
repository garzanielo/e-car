<script setup>
import { ref, computed } from "vue";
import { cars } from "@/utils/mockCars.js";
import CarCard from "@/components/CarCard.vue";

// Filtros
const selectedBrand = ref(null);
const priceRange = ref([0, 50000]);
const mileageRange = ref([0, 100000]);
const yearRange = ref([2000, 2025]);

const carBrands = [...new Set(cars.map((c) => c.brand))];

const filteredCars = computed(() => {
  return cars.filter((car) => {
    const matchBrand =
      !selectedBrand.value || car.brand === selectedBrand.value;
    const matchPrice =
      car.price >= priceRange.value[0] && car.price <= priceRange.value[1];
    const matchMileage =
      car.mileage >= mileageRange.value[0] &&
      car.mileage <= mileageRange.value[1];
    const matchYear =
      car.year >= yearRange.value[0] && car.year <= yearRange.value[1];
    return matchBrand && matchPrice && matchMileage && matchYear;
  });
});
</script>

<template>
  <v-container fluid>
    <v-row no-gutters>
      <!-- Sidebar -->
      <v-col
        cols="12"
        md="3"
        class="pa-6 grey lighten-4"
        style="border-right: 1px solid #eee"
      >
        <h2 class="text-h6 font-weight-bold mb-6">Filtrar Autos</h2>

        <!-- Precio -->
        <div class="mb-1 font-weight-medium grey--text text--darken-1">
          ${{ priceRange[0].toLocaleString() }} - ${{
            priceRange[1].toLocaleString()
          }}
        </div>
        <v-range-slider
          v-model="priceRange"
          :min="0"
          :max="50000"
          step="1000"
          thumb-label
          class="mb-6"
        >
          <template #prepend>
            <span class="text-subtitle-2 font-weight-medium">Precio</span>
          </template>
        </v-range-slider>

        <!-- Kilometraje -->
        <div class="mb-1 font-weight-medium grey--text text--darken-1">
          {{ mileageRange[0].toLocaleString() }} KM -
          {{ mileageRange[1].toLocaleString() }} KM
        </div>
        <v-range-slider
          v-model="mileageRange"
          :min="0"
          :max="100000"
          step="1000"
          thumb-label
          class="mb-6"
        >
          <template #prepend>
            <span class="text-subtitle-2 font-weight-medium">Kilometraje</span>
          </template>
        </v-range-slider>

        <!-- Año -->
        <div class="mb-1 font-weight-medium grey--text text--darken-1">
          {{ yearRange[0] }} - {{ yearRange[1] }}
        </div>
        <v-range-slider
          v-model="yearRange"
          :min="2000"
          :max="2025"
          step="1"
          thumb-label
          class="mb-6"
        >
          <template #prepend>
            <span class="text-subtitle-2 font-weight-medium">Año</span>
          </template>
        </v-range-slider>

        <!-- Marca -->
        <v-select
          v-model="selectedBrand"
          :items="carBrands"
          label="Marca"
          clearable
          dense
          class="mt-4"
        />

        <v-btn color="primary" block class="mt-8" depressed> Buscar </v-btn>
      </v-col>

      <!-- Contenido principal -->
      <v-col cols="12" md="9">
        <section class="py-12 px-6">
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="text-h4 font-weight-bold mb-4">
                Explora Nuestros Autos
              </h1>
              <p class="text-subtitle-1 grey--text text--darken-2">
                Conocé nuestra selección de vehículos nuevos y usados listos
                para vos
              </p>
            </v-col>
          </v-row>
        </section>

        <section class="pb-16 px-6">
          <v-row justify="center" dense>
            <v-col
              v-for="car in filteredCars"
              :key="car.id"
              cols="12"
              sm="6"
              md="6"
              lg="4"
              class="d-flex justify-center"
            >
              <CarCard :car="car" class="w-100" />
            </v-col>
          </v-row>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>
