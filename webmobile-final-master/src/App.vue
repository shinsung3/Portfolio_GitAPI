<template>
  <v-app>
    <title>할할놀놀</title>
    <v-content>
      <div v-if="path != '/'">
        <Header />
        <router-view />
        <Chatbot />
        <Top />
        <Language />
        <Footer />
      </div>
      <div v-else>
        <Intro />
      </div>
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
import Carousel3d from "vue-carousel-3d";
import swal from "sweetalert";

Vue.use(VueResizeText);

Vue.use(Vuetify, {
  iconfont: "md"
});

Vue.use(require("vue-moment"));

Vue.use(Carousel3d);

import store from "./store";
import Header from "./components/Function/Header.vue";
import Top from "./components/Function/Top.vue";
import Footer from "./components/Function/Footer.vue";
import Chatbot from "./components/Function/ChatBot.vue";
import Language from "./components/Function/Language.vue";
import Intro from "./views/IntroPage.vue";

export default {
  name: "App",
  components: {
    Header,
    Top,
    Footer,
    Chatbot,
    Language,
    Intro
  },
  store,
  data() {
    return {
      path: ""
    };
  },
  mounted() {
    this.path = this.$route.path;
    console.log(this.path);
  }
};
</script>
