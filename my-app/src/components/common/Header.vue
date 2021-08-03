<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-2" color="grey darken-1" size="32"></v-avatar>
      <span class="mr-12 brand-name">Marketplace</span>

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

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="info" v-bind="attrs" v-on="on" rounded>
            My account
          </v-btn>
        </template>

        <v-list>          
          <v-list-item>
            <v-list-item-title class="menu-item-account">My Profile</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="menu-item-account">My Collections</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn class="ml-4" text rounded>Connect Wallet</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
.brand-name {
  font-size: 20px;
  font-weight: 600;
}
.menu-item-account{
  cursor: pointer;
}
</style>