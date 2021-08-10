<template>
  <v-row class="form-create">
    <v-col class="pt-8" cols="12" md="3">
      <v-img
        class="banner-img"
        height="240"
        width="240"
        src="https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550"
      ></v-img>
      <v-file-input show-size small-chips truncate-length="20"></v-file-input
    ></v-col>
    <v-col cols="12" md="9">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :counter="30"
              label="Tên sản phẩm"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="price"
              :rules="priceRules"
              :counter="15"
              label="Giá sản phẩm"
              required
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea outlined label="Mô tả sản phẩm"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="createNFT1">Tạo sản phẩm</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "CreateNFT",
  components: {},
  data: () => ({
    valid: false,
    name: "",
    price: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 30 || "Name must be less than 30 characters",
    ],
    priceRules: [
      (v) => !!v || "Price is required",
      (v) => v.length <= 15 || "Name must be less than 15 characters",
    ],
  }),
  methods:{
    createNFT1(){
      this.contractNGIN.methods.safeMint(this.account,"0x7465737400000000000000000000000000000000000000000000000000000000").send({from: this.account}).then(res=>{{
        console.log(res);
      }});
    }
  },
  computed: {
    ...mapGetters({ contractNGIN: "getNghin" }),
    ...mapGetters({ account: "getAccount" }),
  },
};
</script>

<style lang="scss" scoped></style>
