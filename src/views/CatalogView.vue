<script setup>
import { cars } from '@/utils/mockCars.js'
import CarCard from '@/components/CarCard.vue'
</script>

<template>
  <v-container class="catalog-container" fluid>
    <v-row class="justify-center mb-6">
      <v-col cols="12" md="8">
        <h1 class="text-h4 text-center font-weight-bold">Explora Nuestros Autos</h1>
        <p class="text-subtitle-1 text-center text-grey-darken-1">
          Explora nuestra selección de vehículos nuevos y usados
        </p>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-col
        v-for="car in cars"
        :key="car.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <CarCard :car="car" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.catalog-container {
  background-color: #f9f9f9;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>