<script setup></script>

<template>
  <v-container class="py-16">
    
    <v-row justify="center" class="mb-12 text-center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-4">Opciones de Financiación</h1>
        <p class="text-subtitle-1 text-grey-darken-1">
          En e-Car, queremos que encuentres el auto de tus sueños sin complicaciones.
          Conocé nuestras alternativas de financiación personalizadas.
        </p>
      </v-col>
    </v-row>

    
    <v-row justify="center" align="stretch" class="mb-16">
      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card
          class="pa-6 financing-card"
          elevation="4"
          rounded="xl"
          color="grey-lighten-5"
        >
          <v-icon size="48" color="primary">mdi-bank</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Crédito Bancario</h3>
          <p class="text-body-2 text-grey-darken-2">
            Trabajamos con bancos líderes del país para ofrecer tasas competitivas
            y plazos de hasta 60 meses.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card
          class="pa-6 financing-card"
          elevation="4"
          rounded="xl"
          color="grey-lighten-5"
        >
          <v-icon size="48" color="primary">mdi-handshake</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Financiación Directa</h3>
          <p class="text-body-2 text-grey-darken-2">
            Ofrecemos planes de pago directos desde la concesionaria, con mínima documentación.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card
          class="pa-6 financing-card"
          elevation="4"
          rounded="xl"
          color="grey-lighten-5"
        >
          <v-icon size="48" color="primary">mdi-calendar-clock</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Planes Flexibles</h3>
          <p class="text-body-2 text-grey-darken-2">
            Elegí el plazo y monto que se ajuste a tu situación. Simulamos juntos la mejor cuota.
          </p>
        </v-card>
      </v-col>
    </v-row>

    
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <p class="text-subtitle-1 mb-4">
          ¿Querés que un asesor te contacte para armar un plan personalizado?
        </p>
        <v-btn
          color="primary"
          class="text-white"
          size="large"
          href="https://wa.me/5491123456789"
          target="_blank"
        >
          <v-icon start>mdi-whatsapp</v-icon>
          Contactar un asesor
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.financing-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.financing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
</style>
