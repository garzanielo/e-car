<template>
  <v-card
    class="car-card"
    max-width="340"
    elevation="3"
    rounded="lg"
  >
    <v-img :src="car.image" height="200" cover class="rounded-t-lg" />
    <v-card-title class="text-h6 font-weight-bold">
      {{ car.brand }} {{ car.model }}
    </v-card-title>

    <v-card-subtitle class="text-subtitle-2 text-grey-darken-1">
      {{ car.year }} • {{ car.fuelType }} • {{ car.transmission }}
    </v-card-subtitle>

    <v-card-text>
      <div>Mileage: {{ car.mileage.toLocaleString() }} km</div>
      <div>Condition: <strong>{{ car.condition }}</strong></div>
      <div class="text-h6 mt-3 text-primary font-weight-bold">
        ${{ car.price.toLocaleString() }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" block flat>View Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  car: Object
})
</script>

<style scoped>
.car-card {
  transition: transform 0.2s, box-shadow 0.2s;
}
.car-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
</style>