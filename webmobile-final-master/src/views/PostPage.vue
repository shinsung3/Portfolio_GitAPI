<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <PostList :limits="limits" :load-more="true" :column="3"> </PostList>
        </v-flex>
      </v-layout>
      <v-container>
        <center>
          <v-btn v-if="loadMore" id="plusBtn" dark v-on:click="loadMorePosts">
            <v-icon size="25" class="mr-2">fa-plus</v-icon> 더 보기
          </v-btn>
          <v-btn v-if="loadLess" id="minusBtn" dark v-on:click="loadLessPosts">
            <v-icon size="25" class="mr-2">fa-angle-double-up</v-icon> 접기
          </v-btn>
          <span
            v-if="
              this.$store.state.userauth == '팀원' ||
                this.$store.state.userauth == '관리자'
            "
          >
            <SkillWriter />
          </span>
        </center>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import PostList from "../components/Post/PostList";
import "../CSS/DokdoFont.css";
import FirebaseService from "@/services/FirebaseService";
import SkillWriter from "../components/Function/SkillWriter";

export default {
  name: "PostPage",
  components: {
    PostList,
    SkillWriter
  },
  props: {
    column: {
      type: Number,
      default: 1
    },
    limits: {
      type: Number,
      default: 13
    },
    loadMore: {
      type: Boolean,
      default: true
    },
    loadLess: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.posts = await FirebaseService.getPosts();
    },
    async loadMorePosts() {
      this.limits = this.posts.length;
    },
    async loadLessPosts() {
      this.limits = 13;
    }
  }
};
</script>
