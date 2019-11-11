<template lang="html">
  <transition name="back-to-top-fade">
    <div
      id="color"
      class="vue-back-to-top"
      :style="`bottom:${this.bottom};right:${this.right};`"
      v-show="visible"
      @click="backToTop"
    >
      <slot>
        <v-btn class="default" fab>
          <i class="fas fa-arrow-up fa-2x"></i>
        </v-btn>
      </slot>
    </div>
  </transition>
</template>

<script src="https://kit.fontawesome.com/0815a79704.js"></script>
<script>
export default {
  name: "BackToTop",
  props: {
    text: {
      type: String,
      default: "Back To Top"
    },
    visibleoffset: {
      type: [String, Number],
      default: 400
    },
    visibleoffsetbottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: String,
      default: "14px"
    },
    bottom: {
      type: String,
      default: "150px"
    },
    scrollFn: {
      type: Function,
      default: function(eventObject) {}
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted() {
    window.smoothscroll = () => {
      let currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(window.smoothscroll);
        window.scrollTo(0, Math.floor(currentScroll - currentScroll / 5));
      }
    };
    window.addEventListener("scroll", this.catchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.catchScroll);
  },
  methods: {
    catchScroll() {
      const pastTopOffset = window.pageYOffset > parseInt(this.visibleoffset);
      const pastBottomOffset =
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight - parseInt(this.visibleoffsetbottom);
      this.visible =
        parseInt(this.visibleoffsetbottom) > 0
          ? pastTopOffset && !pastBottomOffset
          : pastTopOffset;
      this.scrollFn(this);
    },
    backToTop() {
      window.smoothscroll();
      this.$emit("scrolled");
    }
  }
};
</script>

<style lang="css" scoped>
.back-to-top-fade-enter-active,
.back-to-top-fade-leave-active {
  transition: opacity .7s;
}

.back-to-top-fade-enter,
.back-to-top-fade-leave-to {
  opacity: 0;
}

.vue-back-to-top {
  cursor:pointer;
  position: fixed;
  z-index: 1;
  color:#ffb802
}

.vue-back-to-top .default {
  color: #ffb802;
  text-align: center;
}

.vue-back-to-top .default span{
  color:#ffb802;
}

.vue-back-to-top--is-footer {
  bottom: 50% !important;
  position: absolute;
  transform: translateY(50%);
}

.color {
  background-color: #ffb802 !important;
  color:#ffb802 !important;
}
</style>
