<template>
  <v-card flat class="rounded-xl pa-4 text-center fill-height d-flex flex-column align-center justify-center">
    <v-avatar color="#E3F2FD" size="48" class="mb-3">
      <v-icon color="#005B9A">mdi-domain</v-icon>
    </v-avatar>
    <!-- On affiche le "nom" issu de domaines.json -->
    <div class="text-subtitle-1 font-weight-bold grey--text text--darken-3">
      {{ domaine.nom }}
    </div>
    <v-icon color="#005B9A" small class="mt-2">mdi-arrow-right</v-icon>
  </v-card>
</template>

<script>
export default {
  name: 'DomaineCard',
  props: {
    domaine: { 
      type: Object, 
      required: true 
    }
  }
}
</script>