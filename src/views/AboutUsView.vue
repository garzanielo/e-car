<script setup>
const teamMembers = [
  {
    name: 'Carlos Méndez',
    role: 'Dueño',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    description: 'Con más de 20 años en el rubro automotor, lidera e-Car con pasión y compromiso.'
  },
  {
    name: 'Lucía Romero',
    role: 'Vendedora',
    photo: 'https://randomuser.me/api/portraits/women/21.jpg',
    description: 'Experta en asesoramiento personalizado, siempre enfocada en la satisfacción del cliente.'
  },
  {
    name: 'Martín Silva',
    role: 'Vendedor',
    photo: 'https://randomuser.me/api/portraits/men/35.jpg',
    description: 'Apasionado por los autos y la atención al detalle. Tu próximo auto, en buenas manos.'
  }
]
</script>

<template>
  <v-container class="py-12">
    <h1 class="text-h4 font-weight-bold text-center mb-8">Sobre Nosotros</h1>

    <v-row justify="center" class="mb-12">
      <v-col cols="12" md="8" class="text-center">
        <p class="text-subtitle-1">
          En e-Car nos dedicamos a ofrecer vehículos de calidad, asesoramiento honesto
          y una experiencia de compra transparente. Nuestro objetivo es que encuentres
          el auto ideal con la tranquilidad de estar en buenas manos.
        </p>
      </v-col>
    </v-row>

    <h2 class="text-h5 font-weight-bold text-center mb-6">Nuestro Equipo</h2>
    <v-row justify="center" align="stretch" dense>
      <v-col
        v-for="member in teamMembers"
        :key="member.name"
        cols="12"
        sm="6"
        md="4"
        class="d-flex"
      >
        <v-card class="pa-4" elevation="2" rounded="lg">
          <v-avatar size="100" class="mx-auto mb-4">
            <v-img :src="member.photo" />
          </v-avatar>
          <h3 class="text-h6 font-weight-bold text-center">{{ member.name }}</h3>
          <p class="text-subtitle-2 text-center text-grey-darken-1">{{ member.role }}</p>
          <p class="mt-2 text-center">{{ member.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
