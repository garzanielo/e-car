<script setup></script>

<template>
  <a
    href="https://wa.me/5491123456789"
    target="_blank"
    class="whatsapp-button"
    aria-label="WhatsApp"
  >
    <v-btn icon class="whatsapp-btn" color="success">
      <v-icon>mdi-whatsapp</v-icon>
    </v-btn>
  </a>
</template>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1000;
}
</style>
