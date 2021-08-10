<template>
  <v-app-bar class="header" app color="white" flat>
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

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on"  rounded> My account </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title class="menu-item-account">
              <router-link
                style="text-decoration: none; color: inherit"
                to="/account"
                >My Profile</router-link
              >
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="menu-item-account">
              <router-link
                style="text-decoration: none; color: inherit"
                to="/collections"
                >My Collections</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn class="ml-4" text v-on:click="connectWeb3" rounded>Connect Wallet</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import getWeb3 from '../../getWeb3';
import getContract from '../../getContract';
export default {
  data: () => ({}),
  methods:{
   connectWeb3(){
   getWeb3().then((result) => {
      result.eth.getAccounts().then(res=>{
           console.log(res[0]);
           this.$store.commit('SET_ACCOUNT',res[0]);
      });
      const contract = getContract(result);
     
      this.$store.commit('SET_CONTRACT',contract);
    })
    }

  }
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px !important;
}
.brand-name {
  font-size: 20px;
  font-weight: 600;
}
.menu-item-account {
  cursor: pointer;
}
</style>
