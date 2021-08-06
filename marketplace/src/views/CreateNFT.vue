<template>
  <div class="create-nft" style="padding-top: 50px; height: 100vh">
    <v-container>
      <v-row>
        <v-col>
          <h1>Tạo sản phẩm</h1>
        </v-col>
      </v-row>
      <NFTForm />
    </v-container>
  </div>
</template>

<script>
import NFTForm from "../components/create-nft/NFTForm.vue";

export default {
  components: { NFTForm },
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
</style>
