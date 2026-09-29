<template>
  <v-card flat class="rounded-xl pa-3 fill-height d-flex flex-column justify-space-between position-relative">
    <v-btn
      icon
      x-small
      class="favorite-btn"
      @click.stop="onFavoriteClick"
    >
      <v-icon :color="isFavorite ? 'amber' : 'grey lighten-1'" size="18">
        {{ isFavorite ? 'mdi-star' : 'mdi-star-outline' }}
      </v-icon>
    </v-btn>
    <div>
      <!-- En-tête compact : Icône et Titre sur la MÊME ligne -->
      <div class="d-flex align-center mb-2 pr-6">
        <v-avatar color="#E3F2FD" size="32" class="mr-2 flex-shrink-0">
          <v-icon color="#005B9A" size="18">{{ getIcon(service.logo) }}</v-icon>
        </v-avatar>
        <div class="text-subtitle-2 font-weight-bold text-truncate" style="line-height: 1.2; min-width: 0; flex: 1;">
          {{ service.nom }}
        </div>
      </div>
      <p class="text-caption grey--text text--darken-1 mb-4 text-truncate-2">
        {{ service.description }}
      </p>
    </div>
    <div class="d-flex align-center justify-space-between mt-auto pt-2">
      <span :class="['badge-type', getBadgeClass(service.type)]">
        {{ getBadgeLabel(service.type) }}
      </span>
      <v-avatar color="#005B9A" size="22" class="white--text">
        <v-icon x-small color="white">mdi-arrow-right</v-icon>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { getServiceIcon } from '@/utils/logo.util'

export default {
  name: 'ServiceCard',
  props: {
    service: {
      type: Object,
      required: true
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onFavoriteClick() {
      this.$emit('toggle-favorite', this.service.id)
    },
    getIcon(logo) {
      return getServiceIcon(logo)
    },
    getBadgeLabel(type) {
      if (!type) return 'demande'
      const t = type.toLowerCase()
      if (t === 'applicatif' || t === 'glpi' || t === 'formulaire') return 'formulaire glpi'
      if (t === 'lien' || t === 'externe') return 'lien externe'
      return 'demande'
    },
    getBadgeClass(type) {
      if (!type) return 'badge-orange'
      const t = type.toLowerCase()
      if (t === 'applicatif' || t === 'glpi' || t === 'formulaire') return 'badge-blue'
      if (t === 'lien' || t === 'externe') return 'badge-pink'
      return 'badge-orange'
    }
  }
}
</script>

<style scoped>
.v-card {
  padding: 12px !important;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.badge-type {
  font-size: 10px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  border: 1px solid;
  text-transform: lowercase;
  white-space: nowrap;
}

.badge-orange {
  color: #d97706;
  border-color: #fcd34d;
  background-color: #fef3c7;
}

.badge-blue {
  color: #0284c7;
  border-color: #bae6fd;
  background-color: #e0f2fe;
}

.badge-pink {
  color: #db2777;
  border-color: #fbcfe8;
  background-color: #fce7f3;
}

.position-relative {
  position: relative !important;
}

.favorite-btn {
  position: absolute !important;
  top: 8px;
  right: 8px;
  z-index: 2;
}
</style>