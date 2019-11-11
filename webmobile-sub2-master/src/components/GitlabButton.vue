<template>
<v-container>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-list two-line style="background: antiquewhite;">
            <v-list-tile v-for="(item, i) in this.getMembers()" :key="i" @click="goToUrl(item.web_url)">

              <v-list-tile-avatar>
                <img :src="item.avatar_url">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.username"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.name"></v-list-tile-sub-title>
                <v-list-tile-sub-title v-html="item.web_url"></v-list-tile-sub-title>
              </v-list-tile-content>

            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</v-container>
</template>

<script>
export default {
  name: 'GitlabButton',
  data() {
    return {
      gitlabData: {}
    }
  },
  mounted: function() {
    this.getGitlabData(6091)
  },
  methods: {
    getGitlabData(id) {
      this.GitLabAPI.get(`/projects/${id}/members`, {}, [this.gitlabData, 'GitRepositories'])
    },
    getMembers() {
      return this.gitlabData.GitRepositories;
    },
    goToUrl(url) {
      window.location.href = url;
    }
  }
}
</script>
