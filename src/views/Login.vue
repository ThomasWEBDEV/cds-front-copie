<template>
  <v-app class="grey lighten-4">
    <header class="white py-3 px-8 elevation-1 d-flex align-center justify-space-betxeen">
      <v-img
        src="@/assets/logo-kermene-login-medium.png"
        max-width="180"
        contain
      />
      <!-- links-->
    </header>
    <v-main class="pa-0">
      <v-container fluid class="pa-0">
        <v-img
          src="@/assets/login-banner.png"
          width="100%"
          contain
          class="align-center"
        >
          <!--text de l'image-->
          <div class="pa-8 white--text" style="max-width: 500px;">
            <div class="amber--ext text--accent-4 font-weight-bold mb-2">
              -
            </div>
            <!-- titre et sous titre -->
          </div>
          <!-- carte de formulaire flottante -->
        </v-img>
      </v-container>
    </v-main>

    <footer class="white py-4 texte center">
        <!--login-footer-->
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>