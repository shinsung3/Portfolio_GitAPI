<template>
  <v-layout id="countstyle">
    <v-chip class="ma-2" color="green" text-color="white">
      <v-avatar left class="green darken-4">
        {{ this.portfolios.length }}
      </v-avatar>
      <router-link to="/Portfolio" id="FontColor">포트폴리오</router-link>
    </v-chip>
    <v-chip class="ma-2" color="green" text-color="white">
      <v-avatar left class="green darken-4">
        {{ this.posts.length }}
      </v-avatar>
      <router-link to="/Post" id="FontColor">포스트</router-link>
    </v-chip>
  </v-layout>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PostsCount",
  data() {
    return {
      portfolios: [],
      posts: []
    };
  },
  mounted() {
    this.getPortfolios();
    this.getPosts();
  },
  methods: {
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios();
    },
    async getPosts() {
      this.posts = await FirebaseService.getPosts();
    }
  }
};
</script>

<style>
#countstyle {
  justify-content: flex-end;
  padding: 20px;
}

#FontColor {
  color: white;
}
</style>
