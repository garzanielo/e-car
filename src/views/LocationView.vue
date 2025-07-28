<script setup></script>

<template>
  <v-container class="py-12">
    <!-- Título -->
    <v-row class="text-center mb-10">
      <v-col>
        <v-icon size="48" color="primary">mdi-map-marker</v-icon>
        <h1 class="text-h4 font-weight-bold mt-2">¿Dónde estamos?</h1>
        <p class="text-subtitle-1 mt-2 text-grey-darken-1">
          Visitanos en nuestra sucursal o coordiná una cita con un asesor.
        </p>
      </v-col>
    </v-row>

    <!-- Mapa -->
    <v-row justify="center" class="mb-10">
      <v-col cols="12" md="10">
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.904825728941!2d-64.18613682384341!3d-31.41674819626989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329902eb0b2faf%3A0x4382bb478dc6e982!2sPlaza%20San%20Mart%C3%ADn!5e0!3m2!1ses!2sar!4v1753741076798!5m2!1ses!2sar"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </v-col>
    </v-row>

    <!-- Info de contacto -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-6" elevation="3" rounded="xl" color="grey-lighten-5">
          <h3 class="text-h6 font-weight-bold mb-4">Información de contacto</h3>

          <v-row align="center" class="mb-2">
            <v-col cols="auto">
              <v-icon color="primary">mdi-map-marker</v-icon>
            </v-col>
            <v-col>Avenida Siempre Viva 742, Springfield, Buenos Aires</v-col>
          </v-row>

          <v-row align="center" class="mb-2">
            <v-col cols="auto">
              <v-icon color="primary">mdi-clock-outline</v-icon>
            </v-col>
            <v-col>
              <div>Lunes a Viernes: 9:00 - 18:00</div>
              <div>Sábados: 9:00 - 13:00</div>
              <div>Domingos: Cerrado</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
