<template>
  <v-app>
    <Header />
    <v-main>
      <Home />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";
import Footer from "./components/common/Footer.vue";
import Header from "./components/common/Header.vue";

export default {
  name: "App",

  components: {
    Home,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
</style>
