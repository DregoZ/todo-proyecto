<!-- 0. Emopezamos en creando un navbar en @/components/Navbar.vue... ---->
<template >
  <v-app style="background: #FAFAFA">
    <!-- ROOT OF ALL EVIL -->

    <!-- 6. Añadimos el componente a nuestra página, con una etiqueta con su nombre -->
    <Navbar></Navbar>

    <v-content class="mx-4 mb-4 ">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>


<script>
// @ is an alias to /src
/* 4. importamos el componente por su nombre y desde dnd lo hacemos */
import Navbar from "@/components/Navbar";

/* 5. Añadimos el componente a exportar, con su nombre */
export default {
  name: "App",
  components: {
    Navbar
  },
  data: () => ({
    //
  })
};
</script>
