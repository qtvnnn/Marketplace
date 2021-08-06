<template>
  <div class="account">
    <Profile />
    <MyItems />
    <MyAuctions />
  </div>
</template>

<script>
import Profile from "../components/account/Profile.vue";
import MyItems from "../components/account/MyItems.vue";
import MyAuctions from "../components/account/MyAuctions.vue";

export default {
  name: "Home",

  components: {
    Profile,
    MyItems,
    MyAuctions,
  },
};
</script>

<style lang="scss" scoped>
.account {
  height: 100vh;
  padding-top: 50px;
}
</style>
