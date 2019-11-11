<template>
  <v-container>
    <div>
      <center @click="goToUrl()">
        <img
          src="https://image.flaticon.com/icons/svg/39/39378.svg"
          width="100px"
        />
        <img
          src="https://image.flaticon.com/icons/svg/1536/1536475.svg"
          width="40px"
        />
      </center>
      <v-layout row>
        <v-flex>
          <v-card>
            <v-list two-line style="background: antiquewhite;">
              <v-list-tile v-for="(item, i) in this.getMembers()" :key="i">
                <v-list-tile-avatar v-if="item.author_name === 'nnnangni'">
                  <img src="../../assets/Park1.jpg" width="20px" />
                </v-list-tile-avatar>

                <v-list-tile-avatar v-if="item.author_name === '조신성'">
                  <img src="../../assets/Jo1.jpg" width="20px"/>
                </v-list-tile-avatar>

                <v-list-tile-avatar v-if="item.author_name === 'nustar'">
                  <img src="../../assets/Jo1.jpg" width="20px" />
                </v-list-tile-avatar>

                <v-list-tile-avatar v-if="item.author_name === 'KHI'">
                  <img src="../../assets/kim1.png" width="20px" />
                </v-list-tile-avatar>

                <v-list-tile-avatar v-if="item.author_name === 'Help_dog'">
                  <img src="../../assets/choi1.jpg" width="20px" />
                </v-list-tile-avatar>
                <v-list-title
                  v-if="
                    item.author_name === '최훈석' ||
                      item.author_name === '김현일' ||
                      item.author_name === '박나원'
                  "
                >
                  <img
                    src="https://image.flaticon.com/icons/svg/275/275127.svg"
                    width="40px"
                  />
                  &nbsp&nbsp&nbsp
                </v-list-title>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.author_name">
                  </v-list-tile-sub-title>
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
  name: "GitlabButton",
  data() {
    return {
      gitlabData: {}
    };
  },
  mounted: function() {
    this.getGitlabData(7556);
  },
  methods: {
    getGitlabData(id) {
      this.GitLabAPI.get(
        `/projects/${id}/repository/commits?per_page=100`,
        {},
        [this.gitlabData, "GitRepositories"]
      );
    },
    getMembers() {
      return this.gitlabData.GitRepositories;
    },
    goToUrl() {
      window.location.href = "https://lab.ssafy.com/nnnangni/webmobile-final";
    }
  }
};
</script>
