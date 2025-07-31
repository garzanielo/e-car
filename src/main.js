import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

import { useCarStore } from '@/stores/useCarStore.js'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'light',
  },
  typography: {
    defaultFontFamily: 'Montserrat, Roboto, sans-serif',
  },
})

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)

const carStore = useCarStore()
carStore.initialize()

app.mount('#app')
