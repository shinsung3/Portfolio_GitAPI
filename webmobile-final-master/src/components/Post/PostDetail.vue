<template>
  <div>
    <v-container id="size">
      <v-layout my-5>
        <v-flex xs12 sm8>
          <center>
            <p class="DokdoList font">
              {{ post.title }}
            </p>
          </center>
          <p class="DokdoList subfont">
            {{ post.body }}
            <br />
          </p>
        </v-flex>
      </v-layout>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-flex
          align-center
          justify-end
          row
          fill-height
          right
          v-if="
            this.$store.state.userauth == '팀원' ||
              this.$store.state.userauth == '관리자'
          "
        >
          <SkillWriter />
          <v-btn @click="deleteDB" class="buttonWriter">
            <v-icon>delete</v-icon><span id="padding">삭제</span>
          </v-btn>
        </v-flex>
      </v-form>
      <br />
      <br />
      <br />
      <br />
      <Comments />
    </v-container>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import Comments from "../Function/Comments.vue";
import SkillWriter from "../Function/SkillWriter";

export default {
  name: "PostDetail",
  components: {
    Comments,
    SkillWriter
  },
  data() {
    return {
      post: []
    };
  },
  mounted() {
    this.getPostByIndex();
  },
  methods: {
    async getPostByIndex() {
      this.post = await FirebaseService.getPostByIndex(this.$route.query.id);
    },
    linkToPage() {
      this.$router.push("/psWriter?id=" + this.$route.query.id);
    },
    deleteDB() {
      if (this.$store.state.user.email !== this.post.userId) {
        swal ( "Authorization" , "삭제할 권한이 없습니다." ,  "info" )
        return;
      }
      FirebaseService.deletePost(this.post.id);
      this.posts = FirebaseService.getPosts();
      location.href = "/Post";
    }
  }
};
</script>

<style>
.font {
  font-size: 100px;
}

.subfont {
  font-size: 38px;
}
</style>
