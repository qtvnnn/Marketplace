<template>
  <div class="create-auction" style="padding-top: 50px; height: 100vh">
    <v-container>
      <v-row>
        <v-col>
          <h1>Create a Auction</h1>
        </v-col>
      </v-row>
      <AuctionForm />
    </v-container>
  </div>
</template>

<script>
import AuctionForm from "../components/create-auction/AuctionForm.vue";
export default {
  components: { AuctionForm },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
</style>
