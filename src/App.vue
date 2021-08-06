<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
  data: () => ({
    //
  }),
};
</script>
