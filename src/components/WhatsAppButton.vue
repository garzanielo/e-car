<script setup>
const whatsappLink = "https://wa.me/5491123456789";
</script>

<template>
  <v-btn
    icon
    :href="whatsappLink"
    target="_blank"
    aria-label="WhatsApp"
    class="whatsapp-fab"
    color="success"
    size="default"
  >
    <v-icon size="22">mdi-whatsapp</v-icon>
  </v-btn>
</template>

<style scoped>
.whatsapp-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1100;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}
.whatsapp-fab:hover {
  transform: scale(1.08);
}
</style>
