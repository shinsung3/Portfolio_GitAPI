<template>
<v-app>
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

<script>
// main.js
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResizeText from 'vue-resize-text';

Vue.use(VueResizeText)

Vue.use(Vuetify, {
  iconfont: 'md'
})

import store from './store'
import Header from './components/Header.vue'
import Top from './components/Top.vue'
import Bookmark from './components/BookMark.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Top,
    Bookmark,
    Footer
  },
  store,
  data() {
    return {
    }
  }
}
</script>
