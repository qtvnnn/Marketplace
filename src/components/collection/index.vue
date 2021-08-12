<template>
  <v-container>
    <div v-if="getAccount">
      <v-row>
        <v-col>
          <div class="collection-title mb-5">My Collections</div>
          <p>
            Create, curate, and manage collections of unique NFTs to share and
            sell.
          </p>
          <router-link
            style="text-decoration: none; color: inherit"
            to="/create-item-collection"
          >
            <v-btn class="mt-4" elevation="5" height="50">
              Create a item collection
            </v-btn></router-link
          >
        </v-col>
      </v-row>
      <MyCollections />
    </div>
    <div v-else>
      <ConnectWallet />
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import MyCollections from "./MyCollections.vue";
import ConnectWallet from "../common/ConnectWallet.vue";

export default {
  components: { MyCollections, ConnectWallet },
  data: () => ({}),
  computed: {
    ...mapGetters(["getAccount"]),
  },
};
</script>

<style lang="scss" scoped>
.collection-title {
  font-size: 40px;
  color: #353840;
  font-weight: 500;
}
</style>
