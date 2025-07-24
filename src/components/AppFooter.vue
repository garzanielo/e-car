<template>
  <v-footer color="primary" class="white--text pa-6">
    <v-container>
      <v-row justify="space-between" align="center">
        <v-col cols="12" md="6">
          <p>&copy; {{ new Date().getFullYear() }} e-Car. Todos los derechos reservados.</p>
        </v-col>
        <v-col cols="12" md="6" class="text-md-right">
          <v-btn icon href="https://www.instagram.com" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon href="https://www.facebook.com" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon href="mailto:contacto@e-car.com">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>


<script setup>
// nada por ahora
</script>

