import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: "",
    user: "",
    userauth: "",
    BannerImgUrl: "https://source.unsplash.com/random/1600x900"
  }
});
