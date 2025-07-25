<template>
  <v-card
    class="car-card"
    max-width="380"
    elevation="2"
    rounded="xl"
    hover
  >
    <v-img
      :src="car.image"
      height="200"
      cover
      class="rounded-t-xl"
    />

    <v-card-title class="text-h6 font-weight-bold">
      {{ car.brand }} {{ car.model }}
    </v-card-title>

    <v-card-subtitle class="text-subtitle-2 grey--text text--darken-1">
      {{ car.year }} • {{ car.fuelType }} • {{ car.transmission }}
    </v-card-subtitle>

    <v-card-text>
      <div>Kilometraje: {{ car.mileage.toLocaleString() }} km</div>
      <div>
        Condición: <strong>{{ car.condition }}</strong>
      </div>
      <div class="text-h6 mt-3 primary--text font-weight-bold">
        ${{ car.price.toLocaleString() }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        variant="elevated"
        block
        class="text-white"
        :to="`/car/${car.id}`"
      >
        Ver Detalles
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  car: Object,
})
</script>

<style scoped>
.car-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.car-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
</style>
