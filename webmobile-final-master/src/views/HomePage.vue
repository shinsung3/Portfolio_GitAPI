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
        class="typing DokdoFont"
      >
        말은 쉽지, 코드를 보여줘.
      </h3>
      <br />
      <div
        class="typing DokdoSubTitle"
        slot="text"
        id=".font-weight-regular.font-italic"
      >
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>

    <!-- About Me -->
    <div>
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
                maxFontSize: '30px',
                delay: 200
              }"
              xs12
              v-html="output.introduce"
            ></p>
          </v-flex>
          <v-flex hidden-xs-only pt-3 mt-5 bt-5>
            <v-img :src="getImgUrl('profile.jpg')" aspect-ratio="1.0" />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container>
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
            <router-link to="/info" id="aTag">Team Introduction</router-link>
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
                  <v-card-text style="padding-top:0px">{{
                    item.enbody
                  }}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div id="background1">
      <v-container>
        <!-- Portfolio -->
        <v-layout my-5 id="Portfolio">
          <v-flex>
            <router-link to="/Portfolio">
              <h2
                v-resize-text="{
                  ratio: 1.3,
                  minFontSize: '35px',
                  maxFontSize: '50px'
                }"
                class="my-5 text-xs-center DokdoList FontColor"
                id="aTag"
              >
                Portfolio
              </h2>
            </router-link>
            <PortfolioMain></PortfolioMain>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div>
      <v-container>
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
                id="aTag"
              >
                Skill
              </h2>
            </router-link>
            <PostList :column="3"></PostList>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div id="postColor">
      <v-container>
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
                id="aTag"
              >
                Project
              </h2>
            </router-link>
            <RepositoryList></RepositoryList>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import ImgBanner from "../components/Function/ImgBanner";
// import PortfolioList from "../components/Portfolio/PortfolioList";
import PostList from "../components/Post/PostList";
import RepositoryList from "../components/Repository/RepositoryList";
import Translate from "@/services/Translate";
import PortfolioMain from "../components/Portfolio/PortfolioMain";
import EventBus from "../eventBus.js";
import "../CSS/aTag.css";

export default {
  name: "HomePage",
  components: {
    ImgBanner,
    PostList,
    RepositoryList,
    PortfolioMain
  },
  data: () => ({
    output: {
      introduce: "",
      original: ""
    },
    content: {
      introduce:
        "안녕하세요. 저희는 <strong>할할놀놀</strong>이라는 팀이구요.<br>나원 Park은 Python천재입니다.<br>녹구 Kim은 새로운 팀으로 이직했구요.<br>현일 Kim은 백준 순위가 젤 높습니다.<br>훈석 Choi는 나이 is the bigger than everybody<br>신성 Jo는 Java 할 줄 알아요.",
      original:
        "안녕하세요. 저희는 <strong>할할놀놀</strong>이라는 팀이구요.<br>나원 Park은 Python천재입니다.<br>녹구 Kim은 새로운 팀으로 이직했구요.<br>현일 Kim은 백준 순위가 젤 높습니다.<br>훈석 Choi는 나이 is the bigger than everybody<br>신성 Jo는 Java 할 줄 알아요."
    },
    items: [
      {
        id: 1,
        name: "조신성",
        body:
          "저는 12조가 너무 마음에 들구요. 이번에 Best Member로 뽑혔어욬ㅋㅋ",
        enbody:
          " I really like our team and I was chosen as the Best Member last time. haha"
      },
      {
        id: 2,
        name: "박나원",
        body:
          "저는 삽질을 많이하지만 그러다보면 실력이 좋아지지 않을까 믿고 있습니다! ...",
        enbody:
          "I messed up a lot, but I believe I'll improve my skills soon! ..."
      },
      {
        id: 3,
        name: "최훈석",
        body: "저는 오래걸리지만 확실하게 알고 넘어갑니다!!",
        enbody:
          "It takes me a long time to work, but I know exactly what I'm going to do!!"
      },
      {
        id: 4,
        name: "김현일",
        body:
          "열정에 비해 실력은 많이 모자라지만 이번 기회를 통해 실력을 많이 성장시키고자 합니다 화이팅~~!!",
        enbody:
          "I'm not good enough for my passion, but I want to use this opportunity to improve my skills. Fighting!"
      },
      {
        id: 5,
        name: "김녹구",
        body: "새로운 회사로 이직...",
        enbody: "Move to a new company..."
      }
    ]
  }),
  mounted() {
    this.output = this.content;
  },
  created() {
    EventBus.$on("translate", language => {
      if (language == "original") {
        this.lang = language;
        this.output.introduce = this.content.original;
      } else {
        this.lang = language;
        Translate.translate(language, this.content.original).then(res => {
          this.output.introduce = res;
        });
      }
    });
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    }
  }
};
</script>

<style>
#postColor {
  background-color: #ffe3b1;
}

#gitColor {
  background-color: ##aaebcb;
}

.typing {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>
