<template>
  <v-form ref="form" v-model="valid">
    <v-row class="form-create">
      <v-col class="pt-8" cols="12" md="3">
        <v-img
          class="banner-img"
          height="240"
          width="240"
          :src="require(`../../assets/img/picture-pawn.png`)"
        ></v-img>
        <v-file-input
          :rules="fileRules"
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
                v-model="nft.title"
                :rules="nameRules"
                :counter="30"
                label="Name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-textarea
                outlined
                label="Description"
                :rules="desRules"
                v-model="nft.desc"
                required
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn @click="createItem">Create</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters } from "vuex";
import * as ListFunction from "../../Function/ListFunction";
export default {
  name: "CreateItemCollection",
  components: {},
  data: () => ({
    valid: true,
    price: "",
    nft: {
      fileNFT: "",
      title: "",
      desc: "",
    },
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 30 || "Name must be less than 30 characters",
    ],
    desRules: [(v) => !!v || "Description is required"],
    fileRules: [(v) => !!v || "File is required"],
    imgFile:
      "https://lh3.googleusercontent.com/06DG0Jq_0OUOp0cqfaQh2KyywUMNeeQBrrim1JtNcs6jf0t1e6fuEmO8EOA-eHiR7sHdgqvjjh7wnxgMzeoIIea6lnXTmUx6fEn7FQ=s550",
  }),
  methods: {
    async createNFT1() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append("fileNFT", this.nft.fileNFT);
        formData.append("title", this.nft.title);
        formData.append("desc", this.nft.desc);
        await ListFunction.TaoNFT(this.contractNginNFT, formData, this.account);
        console.log(this.nft.fileNFT);
        console.log(formData);
        // this.$router.push("/collections");
      }
    },
    async createItem() {
      await this.createNFT1();
      console.log("waited");
    },
    selectFile(file) {
      this.nft.fileNFT = file;
    },
  },
  computed: {
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ account: "getAccount" }),
  },
};
</script>

<style lang="scss" scoped></style>
