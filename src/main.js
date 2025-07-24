import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/base.css'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

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

createApp(App).use(router).use(vuetify).mount('#app')
