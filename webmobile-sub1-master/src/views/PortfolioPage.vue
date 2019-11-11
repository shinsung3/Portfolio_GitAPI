<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <div style="line-height: 1.2em;font-size: 5vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Portfolio</div>
      <h3 style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Do Hyeon', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        말은 쉽지, 코드를 보여줘.</h3>
      <br />
      <div style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Talk is cheap. Show me the code.</div>
    </ImgBanner>

    <v-container>
      <!-- Portfolio -->
      <v-layout>
        <v-flex xs12>
          <PortfolioList :limits="6" :load-more="true"></PortfolioList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'

export default {
  name: 'PortfolioPage',
  components: {
    ImgBanner,
    PortfolioList
  }
}
</script>
