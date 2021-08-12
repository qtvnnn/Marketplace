<template>
  <div class="account">
    <div v-if="getAccount">
      <Profile />
      <MyItems />
      <MyAuctions />
    </div>
    <div v-else>
      <ConnectWallet />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Profile from "../components/account/Profile.vue";
import MyItems from "../components/account/MyItems.vue";
import MyAuctions from "../components/account/MyAuctions.vue";
import ConnectWallet from "../components/common/ConnectWallet.vue";

export default {
  name: "Home",

  components: {
    Profile,
    MyItems,
    MyAuctions,
    ConnectWallet,
  },
  computed: {
    ...mapGetters(["getAccount"]),
  },
};
</script>

<style lang="scss" scoped>
.account {
  padding-top: 50px;
}
</style>
