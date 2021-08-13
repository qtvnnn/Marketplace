<template>
  <div class="create-nft" style="padding-top: 50px; height: 100vh">
    <v-container>
      <v-row>
        <v-col>
          <h1>Create a NFT</h1>
        </v-col>
      </v-row>
      <ItemCollectionForm />
    </v-container>
  </div>
</template>

<script>
import ItemCollectionForm from "../components/collection/ItemCollectionForm.vue";

export default {
  components: { ItemCollectionForm },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
</style>
