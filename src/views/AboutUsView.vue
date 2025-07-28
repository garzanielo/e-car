<script setup></script>

<template>
  <v-container class="py-16">
    <!-- Título -->
    <v-row justify="center" class="mb-10 text-center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold mb-4">Sobre Nosotros</h1>
        <p class="text-subtitle-1 text-grey-darken-1">
          Somos una concesionaria apasionada por conectar personas con su próximo auto.
          En <strong>e-Car</strong>, priorizamos la confianza, la transparencia y la atención personalizada.
        </p>
      </v-col>
    </v-row>

    <!-- Misión / Visión / Valores -->
    <v-row justify="center" align="stretch" class="mb-16">
      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6" elevation="3" color="grey-lighten-5" rounded="xl">
          <v-icon size="48" color="primary">mdi-bullseye</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Nuestra Misión</h3>
          <p class="text-body-2 text-grey-darken-2">
            Brindar soluciones de movilidad que superen las expectativas de nuestros clientes,
            con excelencia en cada paso.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6" elevation="3" color="grey-lighten-5" rounded="xl">
          <v-icon size="48" color="primary">mdi-eye</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Nuestra Visión</h3>
          <p class="text-body-2 text-grey-darken-2">
            Ser referentes en la transformación digital del rubro automotor, acercando la experiencia de compra al cliente moderno.
          </p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" class="d-flex">
        <v-card class="pa-6" elevation="3" color="grey-lighten-5" rounded="xl">
          <v-icon size="48" color="primary">mdi-heart</v-icon>
          <h3 class="text-h6 font-weight-bold mt-4 mb-2">Nuestros Valores</h3>
          <p class="text-body-2 text-grey-darken-2">
            Compromiso, integridad, innovación y cercanía son los pilares que guían nuestro trabajo diario.
          </p>
        </v-card>
      </v-col>
    </v-row>

    <!-- CTA final -->
    <v-row justify="center">
      <v-col cols="12" md="6" class="text-center">
        <p class="text-subtitle-1 mb-4">
          ¿Querés saber más o sumarte al equipo?
        </p>
        <v-btn
          color="primary"
          class="text-white"
          size="large"
          href="mailto:contacto@e-car.com"
        >
          <v-icon start>mdi-email</v-icon>
          Contactanos
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.v-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
