<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginAdmin } from '@/utils/auth'

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref(false)

const handleLogin = () => {
  if (loginAdmin(username.value, password.value)) {
    localStorage.setItem('isAdmin', 'true')
    router.push('/admin')
  } else {
    error.value = true
  }
}
</script>

<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <h2 class="text-h5 mb-4">Login de Administrador</h2>

          <v-text-field v-model="username" label="Usuario" outlined></v-text-field>
          <v-text-field
            v-model="password"
            label="Contraseña"
            type="password"
            outlined
          ></v-text-field>

          <v-alert
            v-if="error"
            type="error"
            dense
            text
            class="mb-4"
          >
            Credenciales incorrectas.
          </v-alert>

          <v-btn block color="primary" @click="handleLogin">
            Ingresar
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
