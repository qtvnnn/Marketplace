<template>
  <div class="account">
    <Profile />
    <MyItems />
  </div>
</template>

<script>
import Profile from "../components/account/Profile.vue";
import MyItems from "../components/account/MyItems.vue";

export default {
  name: "Home",

  components: {
    Profile,
    MyItems,
  },
};
</script>

<style lang="scss" scoped>
.account {
  height: 100vh;
  padding-top: 50px;
}
</style>
