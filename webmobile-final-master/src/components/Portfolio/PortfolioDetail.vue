<template>
  <div>
    <ImgBanner :imgSrc="portfolios.img" :check="1">
      <h3
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
        id=".font-weight-regular.font-italic"
        class="typing DokdoFont"
      >
        {{ portfolios.title }}
      </h3>
    </ImgBanner>
    <v-container>
      <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
        <v-layout wrap row>
          <v-layout>
            <v-flex xs12>
              <viewer :value="portfolios.body" />
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>

      <br />
      <br />
      <br />
      <h1>개발 상세 정보</h1>
      <hr />
      <div>
        <b>개발 언어 : {{ portfolios.language }}</b>
      </div>
      <div>
        <b>기간 : {{ portfolios.complete }}</b>
      </div>
      <div>
        <b>인원 : {{ portfolios.people }}</b>
      </div>
      <br />
      <br />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex
          align-center
          justify-end
          row
          fill-height
          right
          v-if="
            this.$store.state.userauth == '팀원' ||
              this.$store.state.userauth == '관리자'
          "
        >
          <v-btn @click="linkToPage" color="info">
            <v-icon>fas fa-user-edit</v-icon><span id="padding">수정</span>
          </v-btn>
          <v-btn @click="deleteDB" class="buttonWriter">
            <v-icon>far fa-trash-alt</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form>
      <br />
      <br />
      <br />
      <br />
      <!-- 댓글 -->
      <Comments />
    </v-container>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Comments from "../Function/Comments.vue";
import ImgBanner from "../Function/ImgBanner";

export default {
  name: "PortfolioDetail",
  components: {
    Comments,
    ImgBanner
  },
  data: () => ({
    portfolios: [],
    portid: "",
    fk: "",
    text: "",
    writer: "",
    valid: false
  }),
  mounted() {
    this.getPortfoliosByIndex();
  },

  methods: {
    async getPortfoliosByIndex() {
      this.portfolios = await FirebaseService.getPortfoliosByIndex(
        this.$route.query.id
      );
    },
    linkToPage() {
      this.$router.push("/pfWriter?id=" + this.$route.query.id);
    },
    deleteDB() {
      FirebaseService.deletePortfolio(this.portfolios.id);
      this.posts = FirebaseService.getPosts();
      location.href = "/Portfolio";
    }
  }
};
</script>
<style>
.font {
  font-size: 65px;
}

.subfont {
  font-size: 38px;
}

#button1 {
  background-color: antiquewhite;
}
</style>
