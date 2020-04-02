<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-row class="my-5">
        <v-col cols="12" md="4" lg="3" v-for="member in team" :key="member.name">
          <v-card flat class="text-center ms-3">
             
              <v-row>
                <v-col align="center" class="mt-5">
                  <v-avatar size="100">
                    <img :src="member.avatar" alt="Team member" />
                  </v-avatar>
                </v-col>
              </v-row>
             

            <v-card-text>
              <div class="subtitle-2">{{ member.name }}</div>
              <div class="grey--text">{{ member.rol }}</div>
            </v-card-text>

            <v-card-actions>
              <v-row>
                <v-col align="center" >
              <v-btn color="grey lighten-1" text>
                <v-icon small left>mdi-message</v-icon>
                <span>message</span>
              </v-btn> </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: () => ({
    team: [
      {
        name: "That Antwan Guy",
        rol: "Web Dev",
        avatar: "/antwan.jpg"
      },
      { name: "Hackerman", rol: "Hacker", avatar: "/hackerman.jpg" },
      { name: "Ryu", rol: "Hado master", avatar: "/ryu.png" },
      { name: "Vaas Montenegro", rol: "Crazy guy", avatar: "/vaas.png" },
      {
        name: "Solid Snake",
        rol: "Industrial espionage",
        avatar: "/snake.jfif"
      }
    ]
  })
};
</script>
 