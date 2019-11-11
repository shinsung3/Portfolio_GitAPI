<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <div style="line-height: 1.2em;font-size: 5vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Post</div>
      <h3 style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Do Hyeon', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        말은 쉽지, 코드를 보여줘.</h3>
      <br />
      <div style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Talk is cheap. Show me the code.</div>
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
import ImgBanner from '../components/ImgBanner'
import PostList from '../components/PostList'

export default {
  name: 'PostPage',
  components: {
    ImgBanner,
    PostList
  }
}
</script>
