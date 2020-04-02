<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <!-- Botones para test el grid -->

    <!-- 18. Vamos a crear un grid para experimentar. 
      Especificamos el layout dependiendo del tamaño de la pantalla
      <v-container class="my-5">
      <v-card flat>
        <v-card-title class="grey--text">Button layout</v-card-title>
        <v-row>
          <v-col md="6" cols="12">
            <v-btn outlined block color="primary">1</v-btn>
          </v-col>

          <v-col md="2" cols="4">
            <v-btn outlined block color="primary">2</v-btn>
          </v-col>

          <v-col md="2" cols="4">
            <v-btn outlined block color="primary">3</v-btn>
          </v-col>

          <v-col md="2" cols="4">
            <v-btn outlined block color="primary">4</v-btn>
          </v-col>
        </v-row>
        <v-row justify="space-around">
          <v-col cols="4" md="2">
            <v-btn outlined block color="success">5</v-btn>
          </v-col>
          <v-col cols="4" md="2">
            <v-btn outlined block color="success">6</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-container>-->

    <!-- 21. Botones para ordenar. Añadimos unas tooltips para efecto dramático XD. -->
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="lightgrey" v-on="on" @click="ordenarPor('title')">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Order by project title</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{on}">
            <v-btn small text color="lightgrey" v-on="on" @click="ordenarPor('person')">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Order by user name</span>
        </v-tooltip>
      </v-row>
      <!-- 19. Lista TODO con v-for-->
      <!-- 20. Creamos una lista de proyectos con varios apartados. Usamos los valores en data() apra mostrar la info -->
      <v-card-title class="grey--text">TODO Projects</v-card-title>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-row :class="`project ${project.status.name}`">
          <v-col cols="12" md="6">
            <!-- 20.  -->
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title}}</div>
          </v-col>
          <v-col cols="4" md="2">
            <div class="caption grey--text">Who</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="4" md="2">
            <div class="caption grey--text">Date limit</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="4" md="2">
            <div class="right">
              <v-chip
                small
                :class="`${project.status.name} ${project.status.color} white--text caption my2`"
              >{{ project.status.name }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
          projects: [
        {
          title: "Learn this Vue thing",
          person: "That Antwan Guy",
          due: "1 Abr 2020",
          status: { name: "complete", color: "light-blue lighten-4" },
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Hack a web site",
          person: "Hackerman",
          due: "10 Ene 2021",
          status: { name: "held", color: "red" },
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Master the Shoryuken",
          person: "Ryu",
          due: "20 Dic 2022",
          status: { name: "complete", color: "light-blue lighten-4" },
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },
        {
          title: "Create a community forum",
          person: "Vaas Montenegro",
          due: "20 Oct 2020",
          status: { name: "ongoing", color: "orange" },
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        },

        {
          title: "Infiltrate donut facility",
          person: "Solid Snake",
          due: "2 Sep 2021",
          status: { name: "ongoing", color: "orange" },
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"
        }

      ]
    }),
  

  /** Función que ordena los elementos  */
  methods: {
    ordenarPor(dato) {
      this.projects.sort((a, b) => (a[dato] < b[dato] ? -1 : 1));
    }
  }
};
</script>
 
 <style>
.project.complete {
  border-left: 4px solid #b3e5fc;
}

.project.held {
  border-left: 4px solid red;
}
.project.ongoing {
  border-left: 4px solid orange;
}
</style>