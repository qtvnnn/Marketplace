import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Account from "../views/Account.vue";
import Collections from "../views/Collections.vue";
import CreateNFT from "../views/CreateNFT.vue";
import CreateAuction from "../views/CreateAuction.vue";
import NFTDetail from "../views/NFTDetail.vue";
import AuctionDetail from "../views/AuctionDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/collections",
    name: "Collections",
    component: Collections,
  },
  {
    path: "/create-nft",
    name: "CreateNFT",
    component: CreateNFT,
  },
  {
    path: "/create-auction",
    name: "CreateAuction",
    component: CreateAuction,
  },
  {
    path: "/nft/1",
    name: "NFTDetail",
    component: NFTDetail,
  },
  {
    path: "/auction/1",
    name: "AuctionDetail",
    component: AuctionDetail,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
