<template>
  <v-flex class="language">
    <v-menu top :offset-x="offset">
      <v-btn class="mx-2" fab slot="activator" color="#ffb802"
        ><i class="fas fa-language fa-2x" style="color:white"></i
      ></v-btn>
      <v-list style="z-index: 999">
        <v-list-tile v-for="(language, index) in languages" :key="index">
          <v-list-tile-title @click="tr_click(index)" style="z-index: 999">{{
            language
          }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-flex>
</template>

<script>
import EventBus from "../../eventBus.js";
export default {
  data: () => ({
    lang: "original",
    languages: ["원본", "한국어", "영어", "일본어", "중국어"],
    right: null,
    offset: true
  }),
  methods: {
    tr_click(index) {
      if (index == 0) {
        this.lang = "original";
        EventBus.$emit("translate", this.lang);
      } else if (index == 1) {
        this.lang = "ko";
        EventBus.$emit("translate", this.lang);
      } else if (index == 2) {
        this.lang = "en";
        EventBus.$emit("translate", this.lang);
      } else if (index == 3) {
        this.lang = "ja";
        EventBus.$emit("translate", this.lang);
      } else if (index == 4) {
        this.lang = "zh-TW";
        EventBus.$emit("translate", this.lang);
      }
    }
  }
};
</script>

<style>
.language {
  position: fixed;
  bottom: 85px;
  right: 14px;
  z-index: 1;
}
</style>
