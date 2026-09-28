<template>
  <v-app class="grey lighten-4">
    <header class="white py-3 px-8 elevation-1 d-flex align-center">
      <v-img
        src="@/assets/logo-kermene-login-medium.png"
        max-width="180"
        cover
        class="align-center"
      />
      <nav class="d-flex align-center" style="gap: 32px; margin-left: 340px;">
        <a 
          href="#" 
          class="text-body-2 font-weight-bold text-decoration-none d-flex align-center pb-1" 
          style="color: #005B9A; font-family: 'Montserrat', sans-serif; border-bottom: 2px solid #005B9A;"
        >
          <v-icon color="#005B9A" class="mr-2" size="20">mdi-home</v-icon>
          Accueil
        </a>

        <a 
          href="#" 
          class="text-body-2 font-weight-medium text-decoration-none d-flex align-center grey--text text--darken-2" 
          style="font-family: 'Montserrat', sans-serif;"
        >
          <v-icon color="#005B9A" class="mr-2" size="20">mdi-format-list-bulleted-square</v-icon>
          Catalogue de services
        </a>

        <a 
          href="#" 
          class="text-body-2 font-weight-medium text-decoration-none d-flex align-center grey--text text--darken-2" 
          style="font-family: 'Montserrat', sans-serif;"
        >
          <v-icon color="#005B9A" class="mr-2" size="20">mdi-book-open-variant</v-icon>
          Ressources
        </a>

        <a 
          href="#" 
          class="text-body-2 font-weight-medium text-decoration-none d-flex align-center grey--text text--darken-2" 
          style="font-family: 'Montserrat', sans-serif;"
        >
          <v-icon color="#005B9A" class="mr-2" size="20">mdi-help-circle-outline</v-icon>
          Aide
        </a>
      </nav>
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
          <div class="pa-8 white--text" style="max-width: 950px; width: 100%; font-family: 'Montserrat', sans-serif;">
            <div 
              style="width: 55px; height: 6px; background-color: #F39200; border-radius: 3px;" 
              class="mb-4"
            ></div>
            <h1 class="text-h2 font-weight-bold mb-4 white--text" style="line-height: 1.1; font-family: 'Montserrat', sans-serif; font-weight: 800;">
              Bienvenue sur votre catalogue de services <span style="color: #F39200; font-weight: 800;">Kermené</span>
            </h1>
            <p class="text-h5 font-weight-regular grey--text text--lighten-4 mb-0" style="line-height: 1.4; font-family: 'Montserrat', sans-serif; opacity: 0.95; max-width: 480px;">
              Des solutions pour simplifier<br>
              votre quotidien et vous accompagner<br>
              dans votre activité.
            </p>
          </div>
          <!-- carte du form -->
           <v-card 
              elevation="6" 
              class="login-card pa-6 rounded-xl white"
            >
              <!-- Icône Profil cercle + bonhomme orange-->
              <div class="text-center mb-4">
                <div 
                  class="d-inline-flex align-center justify-center" 
                  style="width: 76px; height: 76px; border: 4px solid #005B9A; border-radius: 50%;"
                >
                  <v-icon size="44" color="#F39200">mdi-account-outline</v-icon>
                </div>
              </div>

              <div class="text-center mb-6">
                <h2 
                  class="text-h4 font-weight-bold mb-2" 
                  style="color: #005B9A; font-family: 'Montserrat', sans-serif;"
                >
                  Connexion
                </h2>
                <p 
                  class="text-body-2 font-weight-medium mb-0" 
                  style="color: #005B9A; line-height: 1.3; font-family: 'Montserrat', sans-serif;"
                >
                  Accédez à votre catalogue de services<br>
                  Kermené
                </p>
              </div>

              <v-form>
                <v-text-field
                  label=" Identifiants Windows"
                  outlined
                  dense
                  prepend-inner-icon="mdi-email-outline"
                  class="mb-2 white rounded-lg"
                ></v-text-field>

                <v-text-field
                  label="Mot de passe"
                  type="password"
                  outlined
                  dense
                  prepend-inner-icon="mdi-lock-outline"
                  append-icon="mdi-eye-off-outline"
                  class="mb-4 white rounded-lg"
                ></v-text-field>

                <!-- Lien Mot de passe oublié -->
                <div class="text-center mb-6">
                  <a 
                    href="#" 
                    class="text-body-2 font-weight-bold text-decoration-none" 
                    style="color: #005B9A; font-family: 'Montserrat', sans-serif;"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>

                <v-divider class="mb-4" style="border-color: #E0E0E0;"></v-divider>

                <div class="d-flex align-center justify-center" style="color: #005B9A; font-family: 'Montserrat', sans-serif;">
                  <v-icon size="20" color="#005B9A" class="mr-2">
                    mdi-shield-check-outline
                  </v-icon>
                  <span class="text-caption font-weight-bold">Connexion sécurisée</span>
                </div>
              </v-form>
            </v-card>
            <div class="curve-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path fill="#FFFFFF" d="M0,40 C180,90 360,10 540,55 C720,100 900,10 1080,55 C1260,100 1350,30 1440,40 L1440,120 L0,120 Z"></path>
              </svg>
            </div>
        </v-img>
      </v-container>
    </v-main>
    
    <footer class="white py-1 text-center" style="position: relative; margin-top: -70px; z-index: 2;">
      <v-container>
        <!-- Section des 4 piliers avec séparateurs -->
        <v-row align="center" justify="center" class="mb-2">
          <!-- métiers -->
          <v-col cols="12" sm="6" md="3" class="text-center">
            <div class="d-flex flex-column align-center">
              <v-icon size="40" color="#F39200" class="mb-3">mdi-account-group-outline</v-icon>
              <span class="text-body-2 font-weight-bold" style="color: #005B9A; font-family: 'Montserrat', sans-serif;">
                Des métiers
              </span>
              <span class="text-caption grey--text text--darken-1" style="font-family: 'Montserrat', sans-serif;">
                au cœur du mouvement
              </span>
            </div>
          </v-col>

          <v-divider vertical class="hidden-sm-and-down my-3" style="border-color: #E0E0E0;"></v-divider>

          <!-- opportunités -->
          <v-col cols="12" sm="6" md="3" class="text-center style-border-left">
            <div class="d-flex flex-column align-center">
              <v-icon size="40" color="#005B9A" class="mb-3">mdi-sprout-outline</v-icon>
              <span class="text-body-2 font-weight-bold" style="color: #005B9A; font-family: 'Montserrat', sans-serif;">
                Des opportunités
              </span>
              <span class="text-caption grey--text text--darken-1" style="font-family: 'Montserrat', sans-serif;">
                à saisir
              </span>
            </div>
          </v-col>

          <v-divider vertical class="hidden-sm-and-down my-3" style="border-color: #E0E0E0;"></v-divider>

          <!-- services -->
          <v-col cols="12" sm="6" md="3" class="text-center style-border-left">
            <div class="d-flex flex-column align-center">
              <v-icon size="40" color="#F39200" class="mb-3">mdi-lightbulb-outline</v-icon>
              <span class="text-body-2 font-weight-bold" style="color: #005B9A; font-family: 'Montserrat', sans-serif;">
                Des services
              </span>
              <span class="text-caption grey--text text--darken-1" style="font-family: 'Montserrat', sans-serif;">
                pour vous
              </span>
            </div>
          </v-col>

          <v-divider vertical class="hidden-sm-and-down my-3" style="border-color: #E0E0E0;"></v-divider>
          <!-- Ensemble -->
          <v-col cols="12" sm="6" md="3" class="text-center style-border-left">
            <div class="d-flex flex-column align-center">
              <v-icon size="40" color="#005B9A" class="mb-3">mdi-target</v-icon>
              <span class="text-body-2 font-weight-bold" style="color: #005B9A; font-family: 'Montserrat', sans-serif;">
                Ensemble,
              </span>
              <span class="text-caption grey--text text--darken-1" style="font-family: 'Montserrat', sans-serif;">
                vers demain
              </span>
            </div>
          </v-col>
        </v-row>

        <!-- Logo Kermené -->
        <div class="d-flex justify-center" style="margin-top: -15px;">
          <v-img
            src="@/assets/logo-kermene-login-medium.png"
            max-width="140"
            contain
          />
        </div>
      </v-container>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
.v-img {
  position: relative;
}

.login-card {
  position: absolute;
  top: 330px;
  right: 5%;
  width: 580px;
  height: 620px;
  z-index: 10;
  transform: translateY(-50%);
}

.curve-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 3; /* Passe bien au-dessus de la photo */
}

.curve-container svg {
  position: relative;
  display: block;
  width: 100%;
  height: 120px; /* Augmente à 110px pour accentuer encore l'amplitude */
}

.curve-container path {
  fill: #FFFFFF;
}

</style>