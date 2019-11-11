<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <h3
        class="DokdoFont"
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '40px',
          maxFontSize: '150px'
        }"
        slot="text"
      >
        Post
      </h3>
      <div class="DokdoSubTitle" slot="text">
        말은 쉽지, 코드를 보여줘.
      </div>
      <br />
      <div class="DokdoSubTitle" slot="text">
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>
    <v-container>
      <!-- Post -->
      <v-layout>
        <v-flex xs12>
          <PostList :limits="6" :load-more="true"></PostList>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from "../components/ImgBanner";
import PostList from "../components/PostList";
import "../CSS/DokdoFont.css";

export default {
  name: "PostPage",
  components: {
    ImgBanner,
    PostList
  }
};
</script>
