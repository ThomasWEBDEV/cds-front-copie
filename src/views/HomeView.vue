<template>
  <v-app class="grey lighten-4">
    <!-- Header Supérieur -->
    <v-app-bar app clipped-left color="white" height="70" flat class="px-4 border-bottom">
      <v-img
        src="@/assets/logo-kermene-login-medium.png"
        max-width="160"
        contain
        class="mr-6"
      />

      <v-text-field
        v-model="searchQuery"
        placeholder="Rechercher un service, une thématique..."
        prepend-inner-icon="mdi-magnify"
        filled
        rounded
        dense
        hide-details
        clearable
        class="mx-6 search-bar"
        style="max-width: 500px;"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-3">
        <v-badge color="#F39200" content="3" overlap>
          <v-icon color="#005B9A">mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <!-- Menu Déroulant Profil & Déconnexion -->
      <v-menu offset-y transition="scale-transition">
        <template v-slot:activator="{ on, attrs }">
          <div
            v-bind="attrs"
            v-on="on"
            class="d-flex align-center cursor-pointer"
            style="cursor: pointer;"
          >
            <v-avatar color="#005B9A" size="40" class="mr-2">
              <v-icon color="white">mdi-account</v-icon>
            </v-avatar>
            <div class="d-flex flex-column text-left mr-2">
              <span class="text-subtitle-2 font-weight-bold" style="color: #1A1A1A; line-height: 1.2;">
                {{ currentUserSession ? currentUserSession.name : '' }}
              </span>
              <span class="text-caption grey--text text--darken-1">
                {{ currentUserSession ? currentUserSession.service : '' }}
              </span>
            </div>
            <v-icon color="grey darken-1">mdi-chevron-down</v-icon>
          </div>
        </template>

        <v-list dense class="py-0">
          <v-list-item @click="logout">
            <v-list-item-icon class="mr-2">
              <v-icon color="red darken-1" small>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="red--text text--darken-1 font-weight-bold">
              Se déconnecter
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Navigation Drawer (Sidebar gauche) -->
    <v-navigation-drawer
      app
      clipped
      permanent
      width="240"
      color="#004170"
      dark
      class="d-flex flex-column"
    >
      <!-- Liste des liens du menu -->
      <v-list nav dense class="mt-2 px-0">
        <v-list-item-group color="white">
          
          <!-- Accueil (Actif) -->
          <v-list-item link class="px-6 py-1 my-1 nav-item-active">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-home-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" style="font-family: 'Montserrat', sans-serif;">
                Accueil
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Catalogue de services -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-view-grid-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Catalogue de services
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Mes demandes (avec badge) -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-file-document-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Mes demandes
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-avatar color="#F39200" size="20">
                <span class="white--text text-caption font-weight-bold">2</span>
              </v-avatar>
            </v-list-item-action>
          </v-list-item>

          <!-- Mes favoris -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-star-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Mes favoris
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Ressources -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-book-open-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Ressources
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Actualités -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-bullhorn-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Actualités
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Aide -->
          <v-list-item link class="px-6 py-1 my-1">
            <v-list-item-icon class="mr-4">
              <v-icon color="white">mdi-help-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="font-family: 'Montserrat', sans-serif;">
                Aide
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>

      <!-- Pied de la Sidebar : Logo + Slogan Kermené -->
      <template v-slot:append>
        <div class="pa-4 text-center">
          <v-img
            src="@/assets/logo-kermene-login-medium2.png"
            max-width="130"
            max-height="40"
            contain
            class="mx-auto mb-2 logo-white"
            style="margin-left: auto; margin-right: auto; position: relative; right: 8px;"
          />
          <p class="text-caption white--text mb-0 font-weight-medium" style="font-family: 'Montserrat', sans-serif; font-size: 0.65rem !important; opacity: 0.8; line-height: 1.2;">
            Des métiers, des opportunités,<br>un avenir commun
          </p>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Zone principale -->
    <v-main>
      <v-container fluid class="px-6 pt-2 pb-6">
        <v-row>
          <v-col cols="12">
            <!-- Bouton pour afficher / masquer le bloc supérieur -->
            <div class="d-flex justify-start mb-1">
              <v-btn
                text
                small
                color="#005B9A"
                class="text-none font-weight-bold"
                @click="showBanner = !showBanner"
              >
                <v-icon left small>
                  {{ showBanner ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                </v-icon>
                {{ showBanner ? 'Réduire l\'en-tête' : 'Afficher l\'en-tête' }}
              </v-btn>
            </div>

            <!-- Bloc supérieur repliable (Bannière + Raccourcis) -->
            <v-expand-transition>
              <div v-show="showBanner">
                <v-row class="mb-4">
                  <!-- Bannière de bienvenue -->
                  <v-col cols="12" lg="9">
                    <v-card 
                      flat 
                      class="rounded-xl overflow-hidden position-relative hero-banner fill-height" 
                      height="250"
                    >
                      <div class="pa-8 white--text" style="max-width: 500px; z-index: 2; position: relative;">
                        <h1 class="text-h4 font-weight-bold mb-2" style="font-family: 'Montserrat', sans-serif;">
                          Bonjour {{ currentUserSession ? currentUserSession.name.split(' ')[0] : '' }},
                        </h1>
                        <p class="body-2 text--lighten-2 mb-0" style="line-height: 1.4;">
                          Retrouvez ici l'ensemble des services à votre disposition et accédez facilement aux ressources qui vous accompagnent au quotidien.
                        </p>
                      </div>
                    </v-card>
                  </v-col>

                  <!-- Bloc Raccourcis / Besoin d'aide -->
                  <v-col cols="12" lg="3">
                    <v-card flat class="rounded-xl pa-4 fill-height d-flex flex-column justify-space-between grey lighten-4">
                      <div>
                        <div class="text-subtitle-2 font-weight-bold mb-3" style="color: #004170;">
                          <v-icon color="#005B9A" small class="mr-1">mdi-lightning-bolt-outline</v-icon>
                          Raccourcis rapides
                        </div>
                        <v-btn block small color="#005B9A" dark class="mb-2 text-none rounded-lg" depressed>
                          Mes demandes (2)
                        </v-btn>
                        <v-btn block small outlined color="#005B9A" class="text-none rounded-lg" style="background-color: white;">
                          Besoin d'aide ?
                        </v-btn>
                      </div>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-expand-transition>

            <!-- Les onglets de domaines et la grille -->
            <v-tabs v-model="tabActive" background-color="transparent" color="#005B9A" class="mb-4 border-bottom">
              <!-- Onglet 0 : Favoris -->
              <v-tab>
                <v-icon left color="#F39200" small>mdi-star</v-icon>
                MES FAVORIS
              </v-tab>
              <!-- Onglets filtrés selon les droits de l'utilisateur -->
              <v-tab v-for="domaine in userDomainesList" :key="domaine.id">
                {{ domaine.nom }}
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tabActive" class="transparent">
              <!-- Contenu Onglet 0 : Favoris -->
              <v-tab-item>
                <div class="services-grid mt-4">
                  <ServiceCard 
                    v-for="service in servicesFavoris"
                    :key="'fav-' + service.id"
                    :service="service"
                    :is-favorite="true"
                    @toggle-favorite="toggleFavorite"
                  />
                  <v-alert v-if="servicesFavoris.length === 0" type="info" text class="mt-4">
                    Vous n'avez aucun service en favori pour le moment.
                  </v-alert>
                </div>
              </v-tab-item>

              <!-- Contenu des onglets filtrés -->
              <v-tab-item v-for="domaine in userDomainesList" :key="domaine.id">
                <div class="services-grid mt-4">
                  <ServiceCard 
                    v-for="service in getServicesByDomaine(domaine.id)"
                    :key="service.id"
                    :service="service"
                    :is-favorite="checkIsFavorite(service.id)"
                    @toggle-favorite="toggleFavorite"
                  />
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
          <!-- Colonne de droite (Mes raccourcis / Actualités) - On la fera juste après -->
          <v-col cols="12" lg="3">
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import ServiceCard from '@/components/ServiceCard.vue'
import { authService } from '@/services/auth'
import { favoritesService } from '@/services/favorites'

export default {
  name: 'HomeView',
  components: {
    ServiceCard
  },
  data() {
    return {
      tabActive: 1,
      showBanner: true,
      currentUserSession: null,
      searchQuery: '',
      userFavorites: []
    }
  },

  computed: {
    ...mapGetters({
      domaines: 'allDomaines',
      services: 'activeServices',
      userFirstName: 'userFirstName',
      currentUser: 'currentuser'
    }),
    // Liste filtrée des domaines autorisés pour l'utilisateur
    userDomainesList() {
      if (!this.currentUserSession) return []
      const userDomaines = this.currentUserSession.userDomaines || []
      
      // Si ADMIN ('ALL'), on affiche tous les domaines
      if (userDomaines.includes('ALL')) {
        return this.domaines || []
      }

      // Sinon, on n'affiche QUE les domaines figurant dans userDomaines
      return (this.domaines || []).filter(domaine => 
        domaine && userDomaines.includes(domaine.nom)
      )
    },
    // Filtrage dynamique des services (par domaines + par mot-clé)
    userServices() {
      if (!this.currentUserSession) return []

      const normalizeText = (text) => {
        if (!text) return ''
        return text
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
      }

      // 1. Filtrage STRICT par habilitation (Domaines de l'utilisateur)
      const userDomaines = this.currentUserSession.userDomaines || []

      let filtered = (this.services || []).filter(service => {
        if (!service || !Array.isArray(service.domaine)) return false
        
        // Si l'utilisateur a le rôle 'ALL', il voit tout
        if (userDomaines.includes('ALL')) return true

        // Sinon, le service doit contenir au moins un domaine autorisé pour l'utilisateur
        return service.domaine.some(d => d && userDomaines.includes(d.nom))
      })

      // 2. Recherche textuelle (uniquement sur le sous-ensemble déjà autorisé)
      if (this.searchQuery && this.searchQuery.trim() !== '') {
        const query = normalizeText(this.searchQuery)
        filtered = filtered.filter(s => {
          const titleMatch = normalizeText(s.nom).includes(query)
          const descMatch = normalizeText(s.description).includes(query)
          return titleMatch || descMatch
        })
      }

      return filtered
    },

    servicesFavoris() {
      if (!Array.isArray(this.userFavorites)) return []
      return (this.services || []).filter(s => this.checkIsFavorite(s.id))
    }
  },

  methods: {
    toggleFavorite(serviceId) {
      // 1. Récupérer l'ID utilisateur (avec fallbacks si id est sous un autre nom)
      const userId = this.currentUserSession?.id || this.currentUserSession?.email || 'default_user'
      
      // 2. Mettre à jour le localStorage
      const updatedFavorites = favoritesService.toggleFavorite(userId, serviceId)
      
      // 3. Forcer la réactivité
      this.userFavorites = [...updatedFavorites]
    },

    checkIsFavorite(serviceId) {
      if (!Array.isArray(this.userFavorites)) return false
      return this.userFavorites.some(favId => String(favId) === String(serviceId))
    },

    getServicesByDomaine(domaineId) {
      if (!domaineId) return []

      // Si une recherche textuelle est active, on montre les résultats filtrés
      if (this.searchQuery && this.searchQuery.trim() !== '') {
        return this.userServices
      }

      // Sinon, on filtre strictement les services autorisés appartenant à CE domaine
      return (this.userServices || []).filter(service => 
        service && 
        Array.isArray(service.domaine) && 
        service.domaine.some(d => d && String(d.id) === String(domaineId))
      )
    },

    logout() {
      authService.logout()
      this.$router.push('/')
    }
  },

  created() {
    this.currentUserSession = authService.getCurrentUser()
    if (!this.currentUserSession) {
      this.$router.push('/')
      return
    }

    const userId = this.currentUserSession.id || this.currentUserSession.username || 'default_user'
    this.userFavorites = favoritesService.getFavorites(userId) || []

    this.$store.dispatch('initData')
  }
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #E0E0E0 !important;
}

.search-bar >>> .v-input__slot {
  background-color: #F4F6F8 !important;
}

.hero-banner {
  background-image: url('~@/assets/home-banner.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: cover;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
  width: 100%;
}

@media (max-width: 1400px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>