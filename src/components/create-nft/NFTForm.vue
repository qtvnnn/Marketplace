<template>
  <v-row class="form-create">
    <v-col class="pt-8" cols="12" md="3">
      <v-img class="banner-img" height="240" width="240" :src="imgFile"></v-img>
      <v-file-input
        show-size
        small-chips
        truncate-length="20"
        @change="selectFile"
      ></v-file-input
    ></v-col>
    <v-col cols="12" md="9">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="nft.name"
              :rules="nameRules"
              :counter="30"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="price"
              :rules="priceRules"
              :counter="15"
              label="Price"
              required
              type="number"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea
              outlined
              label="Description"
              v-model="nft.desc"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn @click="createNFT1">Create a nft</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import * as ListFunction from "../../ListFunction";
export default {
  name: "CreateNFT",
  components: {},
  data: () => ({
    valid: false,
    price: "",
    nft: {
      fileNFT: "",
      title: "tiêu đề",
      name: "",
      desc: "",
      size: "5286",
      type: "image/jpg",
      lastModified: "1627383738225",
      lastModifiedDate: "adfsdf"
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 30 || "Name must be less than 30 characters",
    ],
    priceRules: [
      (v) => !!v || "Price is required",
      (v) => v.length <= 15 || "Name must be less than 15 characters",
    ],
    imgFile:
      "https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550",
  }),
  methods: {
    createNFT1() {
      const formData = new FormData();
      formData.append('fileNFT', this.nft.fileNFT)
      formData.append('title', this.nft.title)
      formData.append('name', this.nft.name)
      formData.append('desc', this.nft.desc)
      formData.append('size', this.nft.size)
      formData.append('type', this.nft.type)
      formData.append('lastModified', this.nft.lastModified)
      formData.append('lastModifiedDate', this.nft.lastModifiedDate)
      console.log(this.contract);
      ListFunction.TaoNFT(this.contractNGIN, formData, this.account);
      console.log(formData);
    },
    selectFile(file) {

      this.nft.fileNFT = file;
    },
  },
  computed: {
    ...mapGetters({ contractNGIN: "getNghin" }),
    ...mapGetters({ contract: "getContract" }),
    ...mapGetters({ account: "getAccount" }),
  },
};
</script>

<style lang="scss" scoped></style>
