<template>
  <v-layout mt-5 wrap>
    <v-flex v-for="i in portfolios.length > limits ? limits : portfolios.length" xs12 sm6 lg3>
      <Portfolio class="ma-3"
      :date="portfolios[i - 1].created_at.toString()"
      :title="portfolios[i - 1].title"
      :body="portfolios[i - 1].body"
      :imgSrc="portfolios[i - 1].img">
      </Portfolio>
    </v-flex>

    <v-flex xs12 text-xs-center round my-5 v-if="loadMore">
      <v-btn color="info" dark v-on:click="loadMorePortfolios">
        <v-icon size="25" class="mr-2">fa-plus</v-icon>더 보기
      </v-btn>
      <v-btn class="button1" to="/writer"><img src="https://image.flaticon.com/icons/svg/1865/1865689.svg" width=30px />
        <b>&nbsp&nbsp글 작성</b>
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import Portfolio from '@/components/Portfolio'
import FirebaseService from '@/services/FirebaseService'

export default {
  name: 'PortfoliosList',
  props: {
    limits: {
      type: Number,
      default: 4
    },
    loadMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      portfolios: [],
    }
  },
  components: {
    Portfolio
  },
  mounted() {
    this.getPortfolios()
  },
  methods: {
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios()
    },
    loadMorePortfolios() {

    }
  }
}
</script>
<style>
.mw-700 {
  max-width: 700px;
  margin: auto;
}

.button1 {
  background-color: gainsboro;
  border: 0.5px solid gray;
}
</style>
