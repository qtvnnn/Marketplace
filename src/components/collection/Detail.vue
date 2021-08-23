<template>
  <v-container>
    <Loading v-if="isLoad" />
    <v-row v-else>
      <v-col cols="12" md="5">
        <v-img
          class="banner-img"
          max-height="600"
          :src="itemDetail.Metadata.metadata.uri"
        ></v-img
      ></v-col>
      <v-col class="nft-detail-right" cols="12" md="7">
        <p class="item-name">{{ itemDetail.Metadata.metadata.title }}</p>
        <p class="owned">
          Owned by <span class="owner-name">{{ account }}</span>
        </p>
        <p>Description:</p>
        <p class="description">
          {{ itemDetail.Metadata.metadata.desc }}
        </p>
        <p>
          TokenURI:
          <span style="color: #1868b7">{{ itemDetail.Metadata.tokenURI }}</span>
        </p>
        <p>
          Token ID:
          <span style="color: #707a83">{{ itemDetail.TokenId }}</span>
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
                      <span class="title-time">Start Time:</span><br />
                      <date-picker
                        v-model="timeStart"
                        type="datetime"
                        value-type="timestamp"
                        @blur="blurTimeStart"
                      ></date-picker
                      ><br />
                      <span class="error-msg">{{ timeStartValid }}</span>
                    </v-col>
                    <v-col>
                      <span class="title-time">End Time:</span><br />
                      <date-picker
                        v-model="timeEnd"
                        type="datetime"
                        value-type="timestamp"
                        @blur="blurTimeEnd"
                      ></date-picker
                      ><br />
                      <span class="error-msg">{{ timeEndValid }}</span>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-btn @click="auctionIem">Auction</v-btn>
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
import Loading from "../common/Loading.vue";
import * as ListFunction from "../../Function/ListFunction";
import { mapGetters } from "vuex";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "NFT",
  components: { DatePicker, Loading },
  data() {
    return {
      isLoad: true,
      validSell: true,
      validAuction: true,
      price: "",
      startPrice: "",
      stepPrice: "",
      timeStart: "",
      timeEnd: "",
      timeStartValid: "",
      timeEndValid: "",
      priceRules: [
        (v) => !!v || "Price is required",
        (v) => v.length <= 15 || "Name must be less than 15 characters",
      ],
      listCollection: [],
      tokenId: this.$route.params.id,
      itemDetail: {
        Metadata: {
          metadata: {},
        },
      },
    };
  },
  computed: {
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ account: "getAccount" }),
  },
  mounted() {
    setTimeout(() => {
      this.LayDanhSachNFTSoHuu();
    }, 1000);
  },
  methods: {
    LayDanhSachNFTSoHuu() {
      ListFunction.LayDanhSachNFTSoHuu(
        this.contractNginNFT,
        this.account,
        16
      ).then((res) => {
        res.forEach((item) => {
          if (item.TokenId == this.tokenId) {
            // console.log(item);
            this.itemDetail = item;
          }
        });
        // console.log(res);
        // console.log(this.tokenId);
        this.listCollection = res;
        this.isLoad = false;
      });
    },
    sellItem() {
      if (this.$refs.sellForm.validate()) {
        console.log(this.price);
        ListFunction.TaoNFTMuaBan(
          this.contractMarketplace,
          this.contractNginNFT,
          this.tokenId,
          this.price,
          this.account
        ).then((res) => {
          console.log(res);
        });
      }
    },
    auctionIem() {
      if (this.$refs.AuctionForm.validate() && this.timeStart && this.timeEnd) {
        if (this.timeStart >= this.timeEnd) {
          this.timeEndValid = "The End Time must be after Start Time";
        } else {
          this.timeEndValid = "";
          // code here\
          // console.log(this.startPrice, "1");
          // console.log(this.stepPrice, "2");
          // console.log(this.timeStart, "3");
          // console.log(this.timeEnd, "4");
          console.log(this.contractNginNFT, "5");
          console.log(this.account, "6");

          ListFunction.TaoPhienThucHienDauGia(
            this.contractMarketplace,
            this.contractNginNFT,
            this.tokenId,
            this.startPrice,
            100,
            this.stepPrice,
            this.timeStart/1000,
            this.timeEnd/1000,
            this.account
          ).then((res) => {
            console.log(res);
          });
        }
      } else {
        this.validateStartTime();
        this.validateEndTime();
      }
    },
    blurTimeStart() {
      this.validateStartTime();
    },
    blurTimeEnd() {
      this.validateEndTime();
    },
    validateStartTime() {
      if (this.timeStart) {
        this.timeStartValid = "";
      } else {
        this.timeStartValid = "Time Start is required";
      }
    },
    validateEndTime() {
      if (this.timeEnd) {
        this.timeEndValid = "";
      } else {
        this.timeEndValid = "Time Start is required";
      }
    },
  },
  watch: {
    timeStart() {
      this.validateStartTime();
    },
    timeEnd() {
      this.validateEndTime();
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
.title-time {
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
}
.error-msg {
  font-size: 12px;
  font-weight: 400;
  color: #ff5252;
}
.mx-datepicker {
  width: 100%;
}
</style>
