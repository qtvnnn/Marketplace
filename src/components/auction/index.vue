<template>
  <v-container>
    <Loading v-if="isLoad" />
    <v-row v-else>
      <v-col class="nft-detail-left" cols="12" md="4">
        <v-img
          class="banner-img"
          max-height="600"
          :src="auctionDetail.Metadata.data.uri"
        ></v-img
      ></v-col>
      <v-col class="nft-detail-right" cols="12" md="8">
        <v-row>
          <v-col class="info-auction"
            ><p class="item-name">
              {{ auctionDetail.Metadata.data.title }}
            </p>
            <p class="owned">
              Owned by
              <span class="owner-name">{{
                auctionDetail.PhienDauGia.NguoiBan
              }}</span>
            </p>
            <p>Description:</p>
            <p class="description">
              {{ auctionDetail.Metadata.data.desc }}
            </p>
            <!-- <p>
              Contract Address:
              <span style="color: #1868b7"
                >0x88B48F654c30e99bc2e4A1559b4Dcf1aD93FA656</span
              >
            </p> -->
            <p>
              Token ID:
              <span style="color: #707a83">{{
                auctionDetail.PhienDauGia.tokenId
              }}</span>
            </p>
            <p>Blockchain: <span style="color: #707a83"> Rinkeby</span></p>
            <p>
              Price:
              <span class="price">{{
                auctionDetail.PhienDauGia.GiaBanLuon
              }}</span>
            </p>
            <v-btn @click="buyAuction">Buy</v-btn>
            <v-btn @click="endAuction">End Auction</v-btn></v-col
          >
          <v-col>
            <h2 class="mt-15">Auction Rules</h2>
            <ul>
              <li>Start: {{ auctionDetail.PhienDauGia.ThoiGianBatDau }}</li>
              <li>End: {{ auctionDetail.PhienDauGia.ThoiGianKetThuc }}</li>
              <li>
                Recently Price: {{ auctionDetail.PhienDauGia.GiaCuoiCung }}
              </li>
              <li>
                Status:
                {{
                  auctionDetail.PhienDauGia.enTrangThaiDauGia == 0
                    ? "Có thể mua luôn"
                    : "Đang đấu giá"
                }}
              </li>
              <li>
                Starting Price: {{ auctionDetail.PhienDauGia.GiaKhoiDiem }}
              </li>
              <li>Step Price: {{ auctionDetail.PhienDauGia.BuocGia }}</li>
            </ul>
            <h3 class="mt-4 mb-2">Join the auction</h3>
            <v-form ref="AuctionForm" v-model="validAuction">
              <v-text-field
                solo
                :rules="priceRules"
                required
                suffix="NGIN"
                v-model="priceAuction"
              ></v-text-field>
              <v-btn class="btn-auction" @click="joinAuction">Auction</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Loading from "../common/Loading.vue";
import * as ListFunction from "../../Function/ListFunction";
import { mapGetters } from "vuex";
export default {
  name: "Auction",
  components: { Loading },
  data() {
    return {
      isLoad: true,
      tokenId: this.$route.params.id,
      maPhien: this.$route.query.maphien,
      priceAuction: "",
      auctionDetail: {},
      priceRules: [
        (v) => !!v || "Price is required",
        (v) =>
          v >=
            parseInt(this.auctionDetail.PhienDauGia.GiaCuoiCung) +
              parseInt(this.auctionDetail.PhienDauGia.BuocGia) ||
          "Auction Price must be more than Recently Price add Step Price",
      ],
      validAuction: true,
    };
  },
  computed: {
    ...mapGetters({ contractMarketplace: "getContractMarketplace" }),
    ...mapGetters({ contractNginNFT: "getContractNginNFT" }),
    ...mapGetters({ account: "getAccount" }),
    ...mapGetters({ getContractQuan: "getContractQuan" }),
  },
  mounted() {
    setTimeout(() => {
      this.layDanhSachPhienDauGia();
    }, 1000);
  },
  methods: {
    layDanhSachPhienDauGia() {
      console.log(this.maPhien);
      console.log(this.tokenId);
      ListFunction.LayThongTinNFTPhienTheoTokenId(
        this.contractMarketplace,
        this.contractNginNFT,
        this.tokenId,
        this.maPhien
      ).then((res) => {
        console.log(res);
        this.auctionDetail = res;
        this.isLoad = false;
      });
    },
    joinAuction() {
      if (this.$refs.AuctionForm.validate()) {
        console.log(this.priceAuction);
        ListFunction.ThucHienThamGiaDauGia(
          this.contractMarketplace,
          this.getContractQuan,
          this.account,
          this.auctionDetail.PhienDauGia.MaPhien,
          this.priceAuction
        )
          .then((res) => {
            console.log(res, "success");
          })
          .catch((err) => {
            console.log(err, "fail");
          });
      }
    },
    endAuction() {
      ListFunction.ThucHienKetThucPhienDauGia(
        this.contractMarketplace,
        this.account,
        this.auctionDetail.PhienDauGia.MaPhien
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    buyAuction() {
      ListFunction.ThucHienMuaLuonPhienDauGia(
        this.contractMarketplace,
        this.getContractQuan,
        this.account,
        this.auctionDetail.PhienDauGia.MaPhien,
        this.auctionDetail.PhienDauGia.GiaBanLuon
      )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.nft-detail-right {
  border-radius: 5px;
  border: 1px solid rgb(229, 232, 235);
  margin: auto;
}
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
.btn-auction {
  margin-left: calc(50% - 50px);
}
</style>
