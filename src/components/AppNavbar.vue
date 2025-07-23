<script setup>
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const menuItems = [
  { text: "Inicio", route: "/" },
  { text: "Catálogo", route: "/catalog" },
  { text: "Financiación", route: "/financing" },
  { text: "Nosotros", route: "/about-us" },
  { text: "Ubicación", route: "/location" },
  { text: "Contacto", route: "/contact" },
];

const isActiveRoute = (path) => {
  return route.path === path;
};
</script>

<template>
  <v-app-bar app flat color="white" elevate-on-scroll class="app-navbar">
    
    <v-toolbar-title class="d-flex align-center">
      <img src="@/assets/logo.svg" alt="e-car logo" height="40" />
    </v-toolbar-title>

    <v-spacer />

    <div class="d-flex justify-end align-center mr-4">
      <router-link
        v-for="item in menuItems"
        :key="item.text"
        :to="item.route"
        class="nav-link"
        :class="{ 'text-primary': isActiveRoute(item.route) }"
      >
        {{ item.text }}
      </router-link>
    </div>
  </v-app-bar>
</template>

<style scoped>
.nav-link {
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 12px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #1976d2;
}

.text-primary {
  color: #1976d2;
}
</style>
