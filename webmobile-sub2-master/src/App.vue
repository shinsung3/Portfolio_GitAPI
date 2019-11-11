<template>
  <v-app>
    <title>할할놀놀</title>
    <!-- <main-header/> -->
    <!-- <Header/> -->
    <v-content>
      <Header />
      <router-view />
      <Bookmark />
      <Top />
      <Footer />
    </v-content>
  </v-app>
</template>

<script src="https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js"></script>

<script>
// main.js
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify";
import VueResizeText from "vue-resize-text";

Vue.use(VueResizeText);

Vue.use(Vuetify, {
  iconfont: "md"
});

import store from "./store";
import Header from "./components/Header.vue";
import Top from "./components/Top.vue";
import Bookmark from "./components/BookMark.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Top,
    Bookmark,
    Footer
  },
  store,
  data() {
    return {};
  }
};
</script>
