<script setup>
import { VApp } from "vuetify/components";
import AppNavbar from "./components/AppNavbar.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <v-app>
    <AppNavbar />
    <v-main>
      <router-view />
    </v-main>
    <AppFooter />
    <WhatsAppButton />
  </v-app>
</template>

<style scoped>
/* Asegura que el contenido tenga mínimo el alto de la pantalla */
.v-main {
  min-height: calc(
    100vh - 64px - 120px
  ); /* Ajustá según altura navbar/footer */
}
</style>
