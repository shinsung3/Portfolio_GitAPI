<template>
  <v-container id="PortfolioMain">
    <v-layout>
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        style="height:346px!important"
      >
        <slide
          v-for="(i, j) in slides"
          :index="j"
          :key="j"
          style="height:346px!important"
        >
          <Portfolio
            :title="portfolios[i - 1].title"
            :body="portfolios[i - 1].body"
            :imgSrc="portfolios[i - 1].img"
            :uk="portfolios[i - 1].uk"
            :id="portfolios[i - 1].id"
            height="346px"
          >
          </Portfolio>
        </slide>
      </carousel-3d>
    </v-layout>
  </v-container>
</template>

<script>
import Portfolio from "@/components/Portfolio/Portfolio";
import FirebaseService from "@/services/FirebaseService";
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  name: "PortfolioMain",
  data() {
    return {
      portfolios: [],
      slides: {
        type: Number,
        default: 0
      }
    };
  },
  components: {
    Portfolio,
    Carousel3d,
    Slide
  },
  mounted() {
    this.getPortfolios();
  },
  methods: {
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios();
      this.slides = this.portfolios.length;
    }
  }
};
</script>
<style>
.carousel-3d-container {
  margin: 0;
  border-width: 0px;
  border-style: none;
  border-color: grey;
  height: 346px;
  width: auto;
}

.carousel-3d {
  border-width: 0px;
  border-style: none;
  border-color: grey;
}

.carousel-3d-slide {
  height: 346px !important;
  border-width: 0px;
  border-style: none !important;
  box-shadow: 1px 1px #d3d3d3;
}
</style>
