<template>
<div>
  <!-- <main-header/> -->
  <ImgBanner imgSrc="https://source.unsplash.com/random">
    <h3 style="line-height: 1.2em;font-size: 4vw;color: rgba(0, 0, 0, 0.69);font-family: 'Do Hyeon', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
      말은 쉽지, 코드를 보여줘.</h3>
    <br />
    <div style="line-height: 1.2em;font-size: 4vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
      Talk is cheap. Show me the code.</div>
  </ImgBanner>

  <v-container>
    <!-- About Me -->
    <v-layout my-5>
      <v-flex xs12 md7 lg8>
        <h1 class="headline mb-3 text-xs-center text-sm-left"><b v-resize-text="{ratio:1.3, minFontSize: '25px', maxFontSize: '40px', delay: 200}">About Nustar</b></h1>
        <p class="mr-4" v-resize-text="{ratio:1.3, minFontSize: '10px', maxFontSize: '15px', delay: 200}" xs12>안녕하세요. 저는 개발자 Nuster(신성)입니다.
          <br />
          저는 프론트엔드 만드는 게 굉장히 좋구요.<br />
          실제로는 백엔드를 더 잘합니다.<br />
          JAVA는 잘하고 C,C++은 중간정도(SW 경진대회 수상했습니다.) 합니다.<br />
          Python은 조금 할 줄 만 아는데(Python 조교로 활동한 적이 있습니다.)<br />
          앞으로 인공지능을 위해 Python을 주력으로 해볼까합니다.
          <br />
          <br />
          <br />
          알고리즘을 정말 좋아합니다
        </p>
      </v-flex>
      <v-flex hidden-xs-only>
        <v-img :src="getImgUrl('profile.jpg')" aspect-ratio="1.0"/>
      </v-flex>
    </v-layout>

    <!-- Portfolio -->
    <v-layout my-5 id="Portfolio">
      <v-flex xs12>
        <a href="/Portfolio">
          <h2 class="headline my-5 text-xs-center"><b id="title">Portfolio</b></h2>
        </a>
        <PortfolioList></PortfolioList>
      </v-flex>
    </v-layout>

    <!-- Post -->
    <v-layout my-5>
      <v-flex xs12>
        <a href="/Portfolio">
          <h2 class="headline my-5 text-xs-center"><b id="title">Post</b></h2>
        </a>
        <PostList :column="2"></PostList>
      </v-flex>
    </v-layout>

    <!-- Github -->
    <v-layout my-5>
      <v-flex xs12>
        <a href="/Portfolio">
          <h2 class="headline my-5 text-xs-center"><b id="title">Project</b></h2>
        </a>
        <RepositoryList></RepositoryList>
      </v-flex>
    </v-layout>
  </v-container>

</div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'
import PostList from '../components/PostList'
import RepositoryList from '../components/RepositoryList'
import Top from '../components/Top.vue'
import '../CSS/ellipsis.css'

export default {
  name: 'HomePage',
  components: {
    ImgBanner,
    PortfolioList,
    PostList,
    RepositoryList,
    Top
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/' + img)
    }
  }
}
</script>

 <style>
 #title{
   color:black;
 }
</style>
