<template>
  <div v-if="check == 2">
    <v-img :src="imgSrc" aspect-ratio="1.7">
      <v-layout align-center justify-center row fill-height>
        <v-flex text-xs-center>
          <span class="text-shadow display-2 font-weight-light">
            <slot name="text" />
          </span>
          <div id="example-3">
            <div class="info4">Click Me!</div>
            <a v-on:click="add">
              <img
                src="https://image.flaticon.com/icons/svg/1140/1140184.svg"
                width="200px"
              />
            </a>
          </div>
          <div id="list-demo">
            <transition-group
              v-if="items.length < 4"
              show="false"
              name="list custom-classes-transition"
              enter-active-class="animated tada"
            >
              <span v-for="item in items" v-bind:key="item" class="list-item">
                <img
                  src="https://image.flaticon.com/icons/svg/2035/2035965.svg"
                  width="80px"
                />
              </span>
            </transition-group>
            <transition-group
              v-else-if="items.length >= 4"
              show="false"
              name="list custom-classes-transition"
              enter-active-class="animated tada"
              items.length="1"
            >
              <br />
              <span v-for="item in items" v-bind:key="item" class="list-item">
                <v-btn depressed large href="/home">GO! HOME!</v-btn>
              </span>
            </transition-group>
          </div>
        </v-flex>
      </v-layout>
    </v-img>
  </div>
  <div v-else-if="check == 1">
    <v-img :src="imgSrc" style="height: 500px;">
      <v-layout align-center justify-center row fill-height>
        <v-flex text-xs-center>
          <span class="text-shadow display-2 font-weight-light">
            <slot name="text" />
          </span>
        </v-flex>
      </v-layout>
    </v-img>
  </div>
  <div v-else>
    <v-img :src="this.$store.state.BannerImgUrl" aspect-ratio="1.7">
      <v-layout align-center justify-center row fill-height>
        <v-flex text-xs-center>
          <span class="text-shadow display-2 font-weight-light">
            <slot name="text" />
          </span>
        </v-flex>
      </v-layout>
    </v-img>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
import "../../CSS/DokdoFont.css";

export default {
  name: "ImgBanner",
  props: {
    imgSrc: {
      type: String
    },
    text: {
      type: String
    },
    check: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      show: false,
      items: [],
      nextNum: 1
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
};
</script>
<style>
.text-shadow {
  text-shadow: 0 0 15px rgb(255, 255, 255);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
