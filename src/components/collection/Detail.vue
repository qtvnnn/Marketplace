<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5">
        <v-img
          class="banner-img"
          max-height="600"
          src="https://lh3.googleusercontent.com/gerpAEWBpUrL784sMdXAUEUF86-9GxraSLrqcA_2cqo2IiJ_9wIvtlL17ztRWscrFWKqr7fb3NUqV3omPWzkLdB_lGqM6HLIUXkqOw=w600"
        ></v-img
      ></v-col>
      <v-col class="nft-detail-right" cols="12" md="7">
        <p class="item-name">Itemname</p>
        <p class="owned">Owned by <span class="owner-name">Username</span></p>
        <p>Mô tả sản phẩm:</p>
        <p class="description">
          The column was decorated in high relief with scenes from Greek
          mythology.
        </p>
        <p>
          Contract Address:
          <span style="color: #1868b7"
            >0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656</span
          >
        </p>
        <p>
          Token ID:
          <span style="color: #707a83">27267367970176516212915745...</span>
        </p>
        <p>Blockchain: <span style="color: #707a83"> Rinkeby</span></p>

        <v-card>
          <v-tabs color="deep-purple accent-4">
            <v-tab>Sell</v-tab>
            <v-tab>Auction</v-tab>

            <v-tab-item class="pt-4 pb-5">
              <v-container>
                <v-form ref="sellForm" v-model="validSell">
                  <v-row align="center">
                    <v-col>
                      <v-text-field
                        v-model="price"
                        :rules="priceRules"
                        :counter="15"
                        label="Price:"
                        required
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-btn @click="sellItem">Sell</v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-tab-item>
            <v-tab-item class="pt-4 pb-5">
              <v-container>
                <v-form ref="AuctionForm" v-model="validAuction">
                  <v-row align="center">
                    <v-col>
                      <v-text-field
                        v-model="startPrice"
                        :rules="priceRules"
                        :counter="15"
                        label="Starting Price:"
                        required
                        type="number"
                      ></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="stepPrice"
                        :rules="priceRules"
                        :counter="15"
                        label="Step Price:"
                        required
                        type="number"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-datetime-picker
                        label="Start Time:"
                        v-model="timeStart"
                        :rules="startTimeRules"
                        required
                      >
                      </v-datetime-picker>
                    </v-col>
                    <v-col>
                      <v-datetime-picker
                        label="End Time:"
                        v-model="timeEnd"
                        :rules="endTimeRules"
                        required
                      >
                      </v-datetime-picker>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-btn @click="auctionIem">Auction</v-btn>
                      <!-- <date-picker v-model="value4" type="datetime" placeholder="Select datetime"></date-picker> -->
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "NFT",
  components: {},
  data: () => ({
    validSell: true,
    validAuction: true,
    price: "",
    startPrice: "",
    stepPrice: "",
    timeStart: "",
    timeEnd: "",
    priceRules: [
      (v) => !!v || "Price is required",
      (v) => v.length <= 15 || "Name must be less than 15 characters",
    ],
    startTimeRules: [(v) => !!v || "File is required"],
    endTimeRules: [(v) => !!v || "File is required"],
    value4: "",
  }),
  methods: {
    sellItem() {
      if (this.$refs.sellForm.validate()) {
        console.log(this.price);
      }
    },
    auctionIem() {
      if (this.$refs.AuctionForm.validate()) {
        console.log(this.timeStart);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.item-name {
  font-size: 30px;
  color: #353840;
  font-weight: 600;
}
.owned {
  font-size: 14px;
  color: #707a83;
  font-weight: 400;
  .owner-name {
    font-size: 15px;
    color: #1868b7;
  }
}
.description {
  font-size: 14px;
}
.price {
  font-size: 17px;
  color: #3291e9;
}
</style>
