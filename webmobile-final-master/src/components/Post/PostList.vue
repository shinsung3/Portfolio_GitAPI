<template>
  <!-- <v-layout row wrap> -->
  <div>
    <div class="">
      <v-flex
        v-for="(i, j) in posts.length > limits ? limits : posts.length"
        :key="j"
      >
        <Post
          :idx="i"
          :date="posts[i - 1].created_at"
          :title="posts[i - 1].title"
          :body="posts[i - 1].body"
          :id="posts[i - 1].id"
          :userid="posts[i - 1].userid"
        ></Post>
      </v-flex>
    </div>

    <v-flex xs12 text-xs-center round my-5 v-if="loadMore"> </v-flex>
  </div>
  <!-- </v-layout> -->
</template>

<script>
import Post from "@/components/Post/Post";
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PostList",
  props: {
    column: {
      type: Number,
      default: 1
    },
    limits: {
      type: Number,
      default: 6
    },
    loadMore: {
      type: Boolean,
      default: false
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
  components: {
    Post
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

<style>
.mw-700 {
  max-width: 700px;
  margin: auto;
}

#hot {
  background-color: hotpink;
  color: white;
}
</style>
