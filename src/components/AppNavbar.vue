<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { text: "Inicio", route: "/" },
  { text: "Catálogo", route: "/catalog" },
  { text: "Financiación", route: "/financing" },
  { text: "Nosotros", route: "/about-us" },
  { text: "Ubicación", route: "/location" },
  { text: "Contacto", route: "/contact" },
]

const isActiveRoute = (path) => route.path === path
</script>

<template>
  <v-app-bar app flat color="white" elevate-on-scroll class="app-navbar">
    <v-toolbar-title class="d-flex align-center">
      <img src="@/assets/logo.svg" alt="e-car logo" height="40" />
    </v-toolbar-title>

    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        v-for="item in menuItems"
        :key="item.text"
        :to="item.route"
        text
        exact
        :class="{ 'text-primary': isActiveRoute(item.route) }"
      >
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<style scoped>
.app-navbar {
  font-family: 'Montserrat', sans-serif;
}
.text-primary {
  color: #1976d2 !important;
  font-weight: 600;
}
.app-navbar .v-btn {
  text-transform: none !important;
}
</style>
