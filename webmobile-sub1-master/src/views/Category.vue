<template>
<div>
  <ImgBanner imgSrc="https://source.unsplash.com/random">
    <div style="line-height: 1.2em;font-size: 5vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">

      Category</div>

    <h3 style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Do Hyeon', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
      말은 쉽지, 코드를 보여줘.</h3>

    <br />
    <div style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">

      Talk is cheap. Show me the code.</div>
  </ImgBanner>

  <br />
  <br />
  <br />
  <br />
  <br />

  <v-app>

    <!-- <v-layout justify-center> -->
    <!-- <v-flex xs10 sm10 lg10> -->
    <!-- <v-card> -->
    <!-- <center> -->
    <v-container>
      <!-- <v-layout row wrap> -->
      <v-flex v-for="card in cards" :key="card.title" v-bind="{ [`xs${card.flex}`]: true }" xs12 sm6 lg3>
        <v-card>
          <v-img :src="card.src" height="350px">
            <!-- <v-container
                      fill-height
                      fluid
                      pa-2
                    > -->
            <v-layout fill-height>
              <v-flex xs6 align-end flexbox>
                <span class="headline white--text" v-text="card.title"></span>
              </v-flex>
            </v-layout>
            <!-- </v-container> -->
          </v-img>
        </v-card>
      </v-flex>
      <!-- </v-layout> -->
    </v-container>
    <!-- </v-card> -->
    <!-- </v-flex> -->
    <!-- </center> -->
    <!-- </v-layout> -->
  </v-app>
</div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'
import Vue from 'vue';
import Vuetify from 'vuetify'
window.Vue = Vue;


export default {
  name: 'App',
  components: {
    ImgBanner,
  },
  data() {
    return {
      cards: [{
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 6
        },
        {
          title: 'Pre-fab homes',
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          flex: 6
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 6
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 6
        }
      ]
      // 'main-header' : Header
    }
  }
}
</script>



<style>
.test {
  border: 1px solid black;
}
</style>
