<!-- 1. Creamos un componente en @/components al que llamaremos Navbar.vue -->
<!-- 2. No nos olvidemos de crear la plantilla con templates y script -->
<!-- 3. Importamos desde App.vue... ------> 
<template>
  <!-- 7. <nav> es la sección de la página donde vamos a colocar las herramientas de navegación ... -->
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <!-- 8. aplicamos efectos estéticos varios -->
      <div class="text-uppercase grey--text">
        <span class="font-weight-light">Toolbar</span>
        <span>Reshulona</span>
      </div>
      <!-- 9. v-spacer espacia los elementos a derecha e izquierda -->
      <v-spacer></v-spacer>

      <!-- 10. Hacemos el botón bonico, con iconos y to -->
      <v-btn outlined color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 10. Navigation drawer. Con @click en v-app-bar-nav-icon se abre -->
    <v-navigation-drawer bottom app class="purple darken-1" v-model="drawer">
      <!-- 11. Avatar para el drawer -->
      <v-row>
        <v-col align="center" class="mt-5">
          <v-avatar size="100">
            <img src="/antwan.jpg" alt="A really handsome dude" />
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">That Antwan Guy</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <!-- 13. Lista de los elementos en links que aparecerán en el drawer. Muestra un icono seguido del texto asociado -->
      <v-list nav>
        <v-list-item-group>
          <!-- 14. router :to="link.route" nos permite navegar por las diferentes views
          sin cerrar el drawer. Es necesario midificar las rutas en router/index.js... ------>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <!-- separador -->
              <v-list-item-icon>
                <v-icon class="white--text">{{ link.icon }}</v-icon>
              </v-list-item-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Projects", route: "/projects" },
      { icon: "mdi-account", text: "Team", route: "/team" }
    ]
  })
};
</script>
    
    