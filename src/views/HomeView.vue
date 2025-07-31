<script setup>
import CarCard from "@/components/CarCard.vue";
import { cars as mockCars } from "@/utils/mockCars.js";
import { useCarStore } from "@/stores/useCarStore.js";
import heroImage from "@/assets/hero-car.avif";
import { computed } from "vue";

const carStore = useCarStore();

const allCars = computed(() => {
  const storeCarIds = new Set(carStore.cars.map(c => c.id));
  return [
    ...carStore.cars,
    ...mockCars.filter(c => !storeCarIds.has(c.id))
  ];
});
</script>

<template>
  <div class="home-background">
    <v-container fluid class="pa-0">
      <v-sheet
        height="600"
        elevation="0"
        class="d-flex flex-column align-center justify-center text-center pa-0"
      >
        <v-img :src="heroImage" cover class="hero-background">
          <div class="hero-content">
            <h1 class="text-h2 font-weight-bold mb-4">
              Tu próximo auto te espera
            </h1>
            <p class="text-subtitle-1">
              Conocé nuestra amplia gama de vehículos disponibles
            </p>
          </div>
        </v-img>
      </v-sheet>

      <section class="featured-cars my-12">
        <v-container>
          <h2 class="text-h4 font-weight-bold mb-6 text-center">
            Autos Destacados de la Semana
          </h2>
          <v-row dense>
            <v-col
              v-for="car in allCars.slice(0, 4)"
              :key="car.id"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <CarCard :car="car" />
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="advantages py-12">
        <v-container>
          <h2 class="text-h4 font-weight-bold mb-8 text-center">
            ¿Por qué elegirnos?
          </h2>
          <v-row justify="center" align="center" class="text-center" dense>
            <v-col cols="12" sm="6" md="3">
              <v-icon size="48" color="primary">mdi-cash-multiple</v-icon>
              <h3 class="text-h6 font-weight-bold mt-3">
                Precios competitivos
              </h3>
              <p>
                Los mejores precios del mercado para que encuentres tu auto
                ideal.
              </p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon size="48" color="primary">mdi-shield-check</v-icon>
              <h3 class="text-h6 font-weight-bold mt-3">Garantía oficial</h3>
              <p>
                Todos nuestros vehículos cuentan con garantía oficial del
                fabricante.
              </p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon size="48" color="primary">mdi-currency-usd</v-icon>
              <h3 class="text-h6 font-weight-bold mt-3">Financiamiento</h3>
              <p>
                Opciones de financiación flexibles para facilitar tu compra.
              </p>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-icon size="48" color="primary">mdi-account-group</v-icon>
              <h3 class="text-h6 font-weight-bold mt-3">
                Atención personalizada
              </h3>
              <p>Un equipo dedicado a ayudarte en todo el proceso de compra.</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <section class="cta-final py-12 text-center">
        <v-container>
          <h2 class="text-h4 font-weight-bold mb-4">
            ¿Listo para encontrar tu próximo auto?
          </h2>
          <p class="text-subtitle-1 mb-6">
            Contactanos hoy mismo y uno de nuestros asesores te guiará en todo
            el proceso.
          </p>
          <v-btn
            color="primary"
            class="text-white"
            large
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            aria-label="Contactar por WhatsApp"
          >
            <v-icon left>mdi-whatsapp</v-icon>
            Hablar con un asesor
          </v-btn>
        </v-container>
      </section>
    </v-container>
  </div>
</template>

<style scoped>
.home-background {
  background: linear-gradient(
    to bottom,
    rgba(13, 71, 161, 0.3),
    rgba(66, 165, 245, 0.15)
  );
  min-height: 100vh;
}

.hero-background {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.35);
  padding: 2rem;
  border-radius: 16px;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .hero-content h1 {
    font-size: 2rem !important;
  }
}

.featured-cars {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.cta-final {
  background-color: #0d47a1;
  color: white;
}
</style>
