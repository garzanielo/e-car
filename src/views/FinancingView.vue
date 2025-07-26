<script setup>
</script>

<template>
  <v-container class="py-12">
    <!-- Título principal -->
    <v-row justify="center" class="mb-8 text-center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-4">Opciones de Financiación</h1>
        <p class="text-subtitle-1">
          En e-Car, queremos que encuentres el auto de tus sueños sin complicaciones.
          Conocé nuestras alternativas de financiación personalizadas.
        </p>
      </v-col>
    </v-row>

    <!-- Cards de opciones -->
    <v-row justify="center" align="stretch" class="mb-10">
      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-5" elevation="4" rounded="xl">
          <v-icon size="48" color="primary">mdi-bank</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4">Crédito Bancario</h3>
          <p>
            Trabajamos con bancos líderes del país para ofrecer tasas competitivas
            y plazos de hasta 60 meses.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-5" elevation="4" rounded="xl">
          <v-icon size="48" color="primary">mdi-handshake</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4">Financiación Directa</h3>
          <p>
            Ofrecemos planes de pago directos desde la concesionaria, con mínima documentación.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-5" elevation="4" rounded="xl">
          <v-icon size="48" color="primary">mdi-calendar-clock</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4">Planes Flexibles</h3>
          <p>
            Elegí el plazo y monto que se ajuste a tu situación. Simulamos juntos la mejor cuota.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Llamado a la acción -->
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <p class="text-subtitle-1 mb-4">
          ¿Querés que un asesor te contacte para armar un plan personalizado?
        </p>
        <v-btn
          color="primary"
          class="text-white"
          large
          href="https://wa.me/5491123456789"
          target="_blank"
        >
          <v-icon left>mdi-whatsapp</v-icon>
          Contactar un asesor
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
