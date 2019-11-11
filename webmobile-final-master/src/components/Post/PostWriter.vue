<template>
  <div class="py-3">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container id="size">
            <!-- title -->
            <template v-if="posts == ''">
              <v-flex px10 py10>
                <v-text-field
                  v-model="title"
                  :counter="30"
                  :rules="titleRules"
                  label="제목"
                  required
                >
                </v-text-field>
              </v-flex>
              <!-- body -->
              <v-flex px10 py10>
                <markdown-editor v-model="body"></markdown-editor>
              </v-flex>
              <v-flex align-center justify-end row fill-height right>
                <v-btn color="success" @click="submit">
                  업로드<img
                    src="https://image.flaticon.com/icons/svg/261/261868.svg"
                    width="35px"
                  />
                </v-btn>
                <v-btn @click.stop="reset()" class="buttonWriter" href="/Post">
                  취소
                </v-btn>
              </v-flex>
            </template>
            <template v-else>
              <v-flex px10 py10>
                <v-text-field
                  v-model="posts.title"
                  :counter="30"
                  :rules="titleRules"
                  label="제목"
                  required
                >
                </v-text-field>
              </v-flex>
              <!-- body -->
              <v-flex px10 py10>
                <markdown-editor v-model="posts.body"></markdown-editor>
              </v-flex>
              <v-flex align-center justify-end row fill-height right>
                <v-btn color="info" @click="update">
                  수정<img
                    src="https://image.flaticon.com/icons/svg/261/261868.svg"
                    width="35px"
                  />
                </v-btn>
                <v-btn @click.stop="reset()" class="buttonWriter" href="/Post">
                  취소
                </v-btn>
              </v-flex>
            </template>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";

export default {
  name: "PostWriter",
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "입력해주세요!",
      v => (v && v.length <= 30) || "30자 이내로 입력해주세요!"
    ],
    body: "",
    posts: []
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
      // this.$refs.form.resetValidation();
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

<style>
.buttonWriter {
  float: right;
}

.input_css {
  display: none;
}
</style>
