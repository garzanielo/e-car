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

.v-main {
  min-height: calc(
    100vh - 64px - 120px
  ); 
}
</style>
