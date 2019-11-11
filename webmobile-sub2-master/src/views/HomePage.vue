<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <h3
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
        id=".font-weight-regular.font-italic"
        class="DokdoFont"
      >
        말은 쉽지, 코드를 보여줘.
      </h3>
      <br />
      <div
        class="DokdoSubTitle"
        slot="text"
        id=".font-weight-regular.font-italic"
      >
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>
     <ImgurAPI></ImgurAPI>

    <!-- About Me -->
    <v-container>
      <v-layout my-5>
        <v-flex xs12 sm8>
          <h2
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '35px',
              maxFontSize: '50px'
            }"
            class="my-5 text-xs-center text-sm-left DokdoList"
          >
            About Us
          </h2>
          <p
            class="mr-4 DokdoList"
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '15px',
              maxFontSize: '28px',
              delay: 200
            }"
            xs12
          >
            안녕하세요. 저희는 <strong>할할놀놀</strong>이라는 팀이구요.
            <br />
            나원 Park은 Python천재입니다.
            <br />
            녹구 Kim은 새로운 팀으로 이직했구요.
            <br />
            현일 Kim은 백준 순위가 젤 높습니다.
            <br />
            훈석 Choi는 나이 is the bigger than everybody
            <br />
            신성 Jo는 Java 할 줄 알아요.

            <br />
          </p>
        </v-flex>
        <v-flex hidden-xs-only pt-3 mt-5 bt-5>
          <v-img :src="getImgUrl('profile.jpg')" aspect-ratio="1.0" />
        </v-flex>
      </v-layout>
      <center>
        <h1
          class="DokdoList"
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '15px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
          Team Introduction
        </h1>
      </center>
      <v-layout>
        <v-flex xs12>
          <v-expansion-panel inset>
            <v-expansion-panel-content v-for="item in items" :key="item.id">
              <template v-slot:header>
                <div
                  class="DokdoList"
                  v-resize-text="{
                    ratio: 1.3,
                    minFontSize: '15px',
                    maxFontSize: '28px',
                    delay: 200
                  }"
                >
                  {{ item.name }}
                </div>
              </template>
              <v-card>
                <v-card-text>{{ item.body }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>

      <!-- Portfolio -->
      <v-layout my-5 id="Portfolio">
        <v-flex xs12>
          <router-link to="/Portfolio">
            <h2
              v-resize-text="{
                ratio: 1.3,
                minFontSize: '35px',
                maxFontSize: '50px'
              }"
              class="my-5 text-xs-center DokdoList FontColor"
            >
              Portfolio
            </h2>
          </router-link>
          <PortfolioList></PortfolioList>
        </v-flex>
      </v-layout>

      <!-- Post -->
      <v-layout my-5>
        <v-flex xs12>
          <router-link to="/Post">
            <h2
              v-resize-text="{
                ratio: 1.3,
                minFontSize: '35px',
                maxFontSize: '50px'
              }"
              class="my-5 text-xs-center DokdoList FontColor"
            >
              Post
            </h2>
          </router-link>
          <PostList :column="2"></PostList>
        </v-flex>
      </v-layout>

      <!-- Github -->
      <v-layout my-5>
        <v-flex xs12>
          <router-link to="/Repository">
            <h2
              v-resize-text="{
                ratio: 1.3,
                minFontSize: '35px',
                maxFontSize: '50px'
              }"
              class="my-5 text-xs-center DokdoList FontColor"
            >
              Project
            </h2>
          </router-link>
          <RepositoryList></RepositoryList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import "../CSS/FontColor.css";
import ImgBanner from "../components/ImgBanner";
import PortfolioList from "../components/PortfolioList";
import PostList from "../components/PostList";
import RepositoryList from "../components/RepositoryList";
import "../CSS/ellipsis.css";
import ImgurAPI from "../components/ImgurApi";
import "../CSS/DokdoFont.css";

export default {
  name: "HomePage",
  components: {
    ImgBanner,
    ImgurAPI,
    PortfolioList,
    PostList,
    RepositoryList
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: "조신성",
        body:
          "저는 12조가 너무 마음에 들구요. 이번에 Best Member로 뽑혔어욬ㅋㅋ"
      },
      {
        id: 2,
        name: "박나원",
        body:
          "저는 삽질을 많이하지만 그러다보면 실력이 좋아지지 않을까 믿고 있습니다! ..."
      },
      {
        id: 3,
        name: "최훈석",
        body: "저는 오래걸리지만 확실하게 알고 넘어갑니다!!"
      },
      {
        id: 4,
        name: "김현일",
        body:
          "열정에 비해 실력은 많이 모자라지만 이번 기회를 통해 실력을 많이 성장시키고자 합니다 화이팅~~!!"
      },
      {
        id: 5,
        name: "김녹구",
        body: "새로운 회사로 이직..."
      }
    ]
  }),
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  }
};
</script>
