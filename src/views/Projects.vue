<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">
   
      <v-expansion-panels class="mx-auto">
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">date limit {{ project.due }}</div>
            <div>{{ project.content }}</div>
            </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
   
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
  })
};
</script>
 