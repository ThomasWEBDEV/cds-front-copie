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
        placeholder="Rechercher un service, une thématique..."
        prepend-inner-icon="mdi-magnify"
        filled
        rounded
        dense
        hide-details
        class="mx-6 search-bar"
        style="max-width: 500px;"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn icon class="mr-3">
        <v-badge color="#F39200" content="3" overlap>
          <v-icon color="#005B9A">mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <div class="d-flex align-center">
        <v-avatar color="#005B9A" size="40" class="mr-2">
          <v-icon color="white">mdi-account</v-icon>
        </v-avatar>
        <div class="d-flex flex-column text-left mr-2">
          <span class="text-subtitle-2 font-weight-bold" style="color: #1A1A1A; line-height: 1.2;">Marie Dupont</span>
          <span class="text-caption grey--text text--darken-1" style="line-height: 1.1;">Service Qualité</span>
        </div>
        <v-icon color="grey darken-1">mdi-chevron-down</v-icon>
      </div>
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
            src="@/assets/logo-kermene-login-medium.png"
            max-width="130"
            max-height="40"
            contain
            class="mx-auto mb-2 logo-white"
          />
          <p class="text-caption white--text mb-0 font-weight-medium" style="font-family: 'Montserrat', sans-serif; font-size: 0.65rem !important; opacity: 0.8; line-height: 1.2;">
            Des métiers, des opportunités,<br>un avenir commun
          </p>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- Zone principale -->
    <v-main>
      <!-- La sidebar et le contenu viendront ici -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #E0E0E0 !important;
}
.search-bar >>> .v-input__slot {
  background-color: #F4F6F8 !important;
}
</style>