<template>
  <v-footer color="primary" class="pa-6 text-white">
    <v-container>
      <v-row justify="space-between" align="center" class="flex-wrap">
        
        <v-col cols="12" md="6" class="mb-2 mb-md-0">
          <p class="mb-0 text-subtitle-2">
            &copy; {{ new Date().getFullYear() }} <strong>e-Car</strong>. Todos los derechos reservados.
          </p>
        </v-col>

        <v-col cols="12" md="6" class="text-md-end">
          <v-btn
            v-for="(icon, i) in socialIcons"
            :key="i"
            :href="icon.link"
            target="_blank"
            icon
            class="mx-1"
            size="small"
            color="white"
          >
            <v-icon>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const socialIcons = [
  { icon: "mdi-instagram", link: "https://www.instagram.com" },
  { icon: "mdi-facebook", link: "https://www.facebook.com" },
  { icon: "mdi-email", link: "mailto:contacto@e-car.com" },
];
</script>
