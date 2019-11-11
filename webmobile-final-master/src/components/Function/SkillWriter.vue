<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on }">
      <v-btn id="writeBtn" dark v-on="on" v-if="posts == ''">
        <v-icon>border_color</v-icon>글쓰기
      </v-btn>
      <v-btn id="writeBtn" dark v-on="on" v-else>
        <v-icon>border_color</v-icon>수정하기
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Skill
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
            <!-- 작성할 때 -->
            <template v-if="posts == ''">
              <v-content>
                <v-flex px10 py10>
                  <v-text-field
                    v-model="title"
                    :counter="30"
                    :rules="titleRules"
                    label="사용언어"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <!-- body -->
                <v-flex px10 py10>
                  <v-text-field v-model="body" label="사용자"></v-text-field>
                </v-flex>
              </v-content>
              <v-content>
                <v-flex align-center justify-end row fill-height right>
                  <v-btn id="writeBtn" v-on="on" @click="submit">
                    <v-icon>border_color</v-icon>글쓰기
                  </v-btn>
                  <v-btn text @click="dialog = false">
                    <v-icon>cancel</v-icon>취소
                  </v-btn>
                </v-flex>
              </v-content>
            </template>
            <!-- 수정할때 -->
            <template v-else>
              <v-content>
                <v-flex px10 py10>
                  <v-text-field
                    v-model="posts.title"
                    :counter="30"
                    :rules="titleRules"
                    label="사용언어"
                    required
                  >
                  </v-text-field>
                </v-flex>
                <!-- body -->
                <v-flex px10 py10>
                  <v-text-field
                    v-model="posts.body"
                    label="사용자"
                  ></v-text-field>
                </v-flex>
              </v-content>
              <v-content>
                <v-flex align-center justify-end row fill-height right>
                  <v-btn id="writeBtn" dark v-on="on" @click="update">
                    <v-icon>border_color</v-icon>수정
                  </v-btn>
                  <v-btn text @click="dialog = false">
                    <v-icon>cancel</v-icon>취소
                  </v-btn>
                </v-flex>
              </v-content>
            </template>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import "../../CSS/btn.css";
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "SkillWriter",
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "입력해주세요!",
      v => (v && v.length <= 30) || "30자 이내로 입력해주세요!"
    ],
    body: "",
    posts: [],
    dialog: false,
    on: false
  }),
  mounted() {
    this.getPostByIndex();
  },
  methods: {
    async getPostByIndex() {
      this.posts = await FirebaseService.getPostByIndex(this.$route.query.id);
    },
    getBody(msg) {
      this.body = msg;
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      FirebaseService.postPost(
        this.title,
        this.body,
        this.$store.state.user.email
      );
      location.href = "/Post";
    },
    update() {
      if (this.$store.state.user.email !== this.posts.userId) {
        swal ( "Authorization" , "수정할 권한이 없습니다!" ,  "info" )
        return;
      }

      FirebaseService.editPost(
        this.posts.title,
        this.posts.body,
        this.posts.id
      );
      this.posts = FirebaseService.getPosts();
      location.href = "/Post";
    }
  }
};
</script>
