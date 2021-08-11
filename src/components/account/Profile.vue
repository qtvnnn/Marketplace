<template>
  <v-container class="profile">
    <v-row>
      <v-col>
        <v-avatar class="mb-6" color="warning lighten-2" size="140"
          >NN</v-avatar
        >
        <h2 class="mb-4 username">User Name</h2>
        <h3 class="mb-12">
          Tài khoản của bạn:
          <span class="address">{{ account }} </span>
        </h3>
      </v-col>
    </v-row>
    <hr />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  data: () => ({
    
  }),
  components: {},

  computed: {
    ...mapGetters({ account: "getAccount" }),
  },
};
</script>

<style lang="scss" scoped>
.profile {
  text-align: center;
  .username {
    font-size: 40px;
    color: rgb(53, 56, 64);
  }
  .address {
    color: rgb(112, 122, 131);
    font-size: 16px;
    font-weight: 100;
  }
}
</style>
