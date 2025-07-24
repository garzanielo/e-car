<script setup>
import { cars } from "@/utils/mockCars.js";
import CarCard from "@/components/CarCard.vue";
</script>

<template>
  <div class="catalog-background">
    <v-container fluid>
      <section class="catalog-header py-12">
        <v-row class="justify-center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="text-h4 font-weight-bold mb-4">
              Explora Nuestros Autos
            </h1>
            <p class="text-subtitle-1 text-grey-darken-2">
              Conocé nuestra selección de vehículos nuevos y usados listos para
              vos
            </p>
          </v-col>
        </v-row>
      </section>

      <section class="catalog-list pb-12">
        <v-row justify="center" dense>
          <v-col
            v-for="car in cars"
            :key="car.id"
            cols="12"
            sm="6"
            md="6"
            lg="4"
            class="d-flex justify-center"
          >
            <div class="car-card-wrapper">
              <CarCard :car="car" />
            </div>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<style scoped>
.catalog-background {
  background: linear-gradient(
    to bottom,
    rgba(13, 71, 161, 0.1),
    rgba(66, 165, 245, 0.05)
  );
  min-height: 100vh;
}

.catalog-header {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.catalog-list {
  padding-top: 1rem;
}
.car-card-wrapper {
  max-width: 400px;
  width: 100%;
}
</style>
