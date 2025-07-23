<script setup>
import AppNavbar from "./components/AppNavbar.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
</script>

<template>
  <v-app>
    <AppNavbar />
    <router-view />
    <WhatsAppButton />
  </v-app>
</template>
