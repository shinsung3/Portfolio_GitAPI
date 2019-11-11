<template>
  <v-layout column>
    <v-flex v-for="i in repositories1.length > limits ? limits : repositories1.length">
      <v-divider v-if="i === 1"></v-divider>
      <Repository :repos="repositories1[i - 1]"></Repository>
      <v-divider></v-divider>
    </v-flex>
    <v-flex v-for="i in repositories.length > limits ? limits : repositories.length">
      <v-divider v-if="i === 1"></v-divider>
      <Repository :repos="repositories[i - 1]"></Repository>
      <v-divider></v-divider>
    </v-flex>
    <v-flex v-for="i in repositories2.length > limits ? limits : repositories2.length">
      <v-divider v-if="i === 1"></v-divider>
      <Repository :repos="repositories2[i - 1]"></Repository>
      <v-divider></v-divider>
    </v-flex>
    <v-flex v-for="i in repositories3.length > limits ? limits : repositories3.length">
      <v-divider v-if="i === 1"></v-divider>
      <Repository :repos="repositories3[i - 1]"></Repository>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
import Repository from "@/components/Repository/Repository";
import GitlabService from "@/services/GitlabService";

export default {
  name: "RepositoryList",
  props: {
    limits: {
      type: Number,
      default: 2
    },
    loadMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      repositories: [],
      repositories1: [],
      repositories2: [],
      repositories3: []
    };
  },
  components: {
    Repository
  },
  mounted() {
    this.getGitlabRepos("nnnangni");
    this.getGitlabRepos1("CodingKing");
    this.getGitlabRepos2("Help_dog");
    this.getGitlabRepos3("DogBird");
  },
  methods: {
    async getGitlabRepos(userName) {
      const response = await GitlabService.getRepos(userName);
      if (response.status !== 200) {
        return;
      }
      this.repositories = response.data;
    },
    async getGitlabRepos1(userName) {
      const response = await GitlabService.getRepos(userName);
      if (response.status !== 200) {
        return;
      }
      this.repositories1 = response.data;
    },
    async getGitlabRepos2(userName) {
      const response = await GitlabService.getRepos(userName);
      if (response.status !== 200) {
        return;
      }
      this.repositories2 = response.data;
    },
    async getGitlabRepos3(userName) {
      const response = await GitlabService.getRepos(userName);
      if (response.status !== 200) {
        return;
      }
      this.repositories3 = response.data;
    }
  }
};
</script>
