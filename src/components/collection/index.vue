<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="collection-title mb-5">My Collections</div>
        <p>
          Create, curate, and manage collections of unique NFTs to share and
          sell.
        </p>
        <v-btn class="mt-4" elevation="5" height="50">
          Create a collection
        </v-btn>
      </v-col>
    </v-row>
    <MyCollections />
  </v-container>
</template>

<script>
import MyCollections from "./MyCollections.vue";

export default {
  components: { MyCollections },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.collection-title {
  font-size: 40px;
  color: #353840;
  font-weight: 500;
}
</style>
