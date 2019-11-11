<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <h3
        class="DokdoFont"
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
      >
        Portfolio
      </h3>
      <h3 class="DokdoSubTitle" slot="text">
        말은 쉽지, 코드를 보여줘.
      </h3>
      <br />
      <div class="DokdoSubTitle" slot="text">
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>

    <v-container>
      <!-- Portfolio -->
      <v-layout>
        <v-flex xs12>
          <PortfolioList :limits="8" :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import PortfolioList from "../components/PortfolioList";
import "../CSS/DokdoFont.css";
export default {
  name: "PortfolioPage",
  components: {
    ImgBanner,
    PortfolioList
  }
};
</script>
