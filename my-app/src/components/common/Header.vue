<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-2" color="grey darken-1" size="32"></v-avatar>
      <span class="mr-12 brand-name" style="margin-right: 40px">
        <router-link style="text-decoration: none; color: inherit" to="/"
          >Marketplace</router-link
        >
      </span>

      <v-responsive max-width="400">
        <v-text-field
          label="Search items, collections, and accounts"
          prepend-icon="mdi-magnify"
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>

      <v-spacer></v-spacer>
      
      <v-btn class="ml-4" text rounded>
        <router-link style="text-decoration: none; color: inherit" to="/account"
          >My Account</router-link
        >
      </v-btn>
      <v-btn class="ml-4" text rounded>
        <router-link style="text-decoration: none; color: inherit" to="/items"
          >My Items</router-link
        >
      </v-btn>

      <v-btn class="ml-4" text rounded>Connect Wallet</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
.brand-name {
  font-size: 20px;
  font-weight: 600;
}
.menu-item-account {
  cursor: pointer;
}
</style>