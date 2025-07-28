<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
</script>

<template>
  <v-container class="py-12">
    <!-- Título -->
    <v-row class="text-center mb-10">
      <v-col>
        <v-icon size="48" color="primary">mdi-phone</v-icon>
        <h1 class="text-h4 font-weight-bold mt-2">Contacto</h1>
        <p class="text-subtitle-1 mt-2 text-grey-darken-1">
          Escribinos y te responderemos a la brevedad.
        </p>
      </v-col>
    </v-row>

    <!-- Contenido -->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <!-- Formulario -->
        <v-card elevation="3" class="pa-6 mb-6" rounded="xl" color="grey-lighten-5">
          <v-form>
            <v-text-field v-model="name" label="Nombre completo" required prepend-inner-icon="mdi-account" />
            <v-text-field v-model="email" label="Email" required type="email" prepend-inner-icon="mdi-email" />
            <v-text-field v-model="phone" label="Teléfono" required prepend-inner-icon="mdi-phone" />
            <v-textarea
              v-model="message"
              label="Mensaje"
              rows="4"
              auto-grow
              prepend-inner-icon="mdi-message"
            />

            <v-btn color="primary" class="mt-4 text-white" block>
              Enviar mensaje
            </v-btn>
          </v-form>
        </v-card>

        <!-- Info de contacto -->
        <v-card flat class="text-center">
          <p class="mb-2">
            <v-icon color="primary" class="me-2">mdi-email</v-icon>
            contacto@e-car.com
          </p>
          <p class="mb-4">
            <v-icon color="primary" class="me-2">mdi-phone</v-icon>
            +54 9 11 2345 6789
          </p>
          <v-btn icon href="https://www.instagram.com" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
          <v-btn icon href="https://www.facebook.com" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
