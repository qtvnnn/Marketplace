<template>
  <v-app id="inspire" style="background: #82b1ff">
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },
};
</script>
