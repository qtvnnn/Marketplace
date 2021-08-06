<template>
  <div class="nft-detail" style="padding-top: 50px">
    <h1 class="mb-12" style="text-align: center">Chi tiết sản phẩm</h1>
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
          <p class="item-name">Item Name</p>
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
          <p>Price: <span class="price">$10</span></p>
          <v-btn>Make Offer</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
