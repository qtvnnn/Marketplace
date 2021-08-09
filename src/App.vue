<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
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
