<template>
  <div class="py-3">
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container id="size">
            <template v-if="portfolio == ''">
              <!-- title -->
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
                <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
                  <v-layout wrap row>
                    <v-flex xs12>
                      <editor v-model="body" />
                    </v-flex>
                  </v-layout>
                  <br />
                  <br />
                  <h2>
                    <img
                      src="https://image.flaticon.com/icons/svg/425/425960.svg"
                      width="25px"
                    />
                    <span id="gap">미리보기</span>
                  </h2>
                  <v-layout>
                    <v-flex xs12 id="editbody">
                      <viewer :value="body" />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <!-- language -->
              <v-flex px10 py10>
                <v-text-field
                  v-model="language"
                  :counter="30"
                  :rules="titleRules"
                  label="사용언어"
                  required
                >
                </v-text-field>
              </v-flex>
              <!-- complete -->
              <v-flex px10 py10>
                <v-text-field
                  v-model="complete"
                  :counter="30"
                  :rules="titleRules"
                  label="기간"
                  required
                >
                </v-text-field>
                <!-- people -->
                <v-flex px10 py10>
                  <v-text-field
                    v-model="people"
                    :counter="30"
                    :rules="titleRules"
                    label="참여인원"
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-flex>
              <!-- image -->
              <v-flex>
                <v-container fluid>
                  <v-flex
                    xs12
                    class="text-xs-center text-sm-center text-md-center text-lg-center"
                  >
                    <img :src="imageUrl" height="150" v-if="imageUrl" />
                    <v-text-field
                      label="Select Image"
                      @click="pickFile"
                      v-model="imageName"
                      prepend-icon="attach_file"
                    >
                    </v-text-field>
                    <input
                      type="file"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked"
                      class="input_css"
                    />
                  </v-flex>
                </v-container>
              </v-flex>
              <v-flex align-center justify-end row fill-height right>
                <v-btn color="success" @click="submit">
                  업로드<img
                    src="https://image.flaticon.com/icons/svg/261/261868.svg"
                    width="35px"
                  />
                </v-btn>
                <v-btn
                  @click.stop="reset()"
                  class="buttonWriter"
                  href="/Portfolio"
                >
                  취소
                </v-btn>
              </v-flex>
            </template>
            <template v-else>
              <v-flex px10 py10>
                <v-text-field
                  v-model="portfolio.title"
                  :counter="30"
                  :rules="titleRules"
                  label="제목"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex px10 py10>
                <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
                  <v-layout wrap row>
                    <v-flex xs12>
                      <editor v-model="portfolio.body" />
                    </v-flex>
                  </v-layout>
                  <br />
                  <br />
                  <h2>
                    <img
                      src="https://image.flaticon.com/icons/svg/425/425960.svg"
                      width="25px"
                    />
                    <span id="gap">미리보기</span>
                  </h2>
                  <v-layout>
                    <v-flex xs12 id="editbody">
                      <viewer :value="portfolio.body" />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
              <v-flex px10 py10>
                <v-text-field
                  v-model="portfolio.language"
                  :counter="30"
                  :rules="titleRules"
                  label="사용언어"
                  required
                >
                </v-text-field>
              </v-flex>
              <v-flex px10 py10>
                <v-text-field
                  v-model="portfolio.complete"
                  :counter="30"
                  :rules="titleRules"
                  label="기간"
                  required
                >
                </v-text-field>
                <v-flex px10 py10>
                  <v-text-field
                    v-model="portfolio.people"
                    :counter="30"
                    :rules="titleRules"
                    label="참여인원"
                    required
                  >
                  </v-text-field>
                </v-flex>
              </v-flex>
              <v-flex>
                <v-container fluid>
                  <v-flex
                    xs12
                    class="text-xs-center text-sm-center text-md-center text-lg-center"
                  >
                    <img :src="imageUrl" height="150" v-if="imageUrl" />
                    <v-text-field
                      label="Select Image"
                      @click="pickFile"
                      v-model="imageName"
                      prepend-icon="attach_file"
                    >
                    </v-text-field>
                    <input
                      type="file"
                      ref="image"
                      accept="image/*"
                      @change="onFilePicked"
                      class="input_css"
                    />
                  </v-flex>
                </v-container>
              </v-flex>
              <v-flex align-center justify-end row fill-height right>
                <v-btn color="success" @click="update">
                  수정<img
                    src="https://image.flaticon.com/icons/svg/261/261868.svg"
                    width="35px"
                  />
                </v-btn>
                <v-btn
                  @click.stop="reset()"
                  class="buttonWriter"
                  href="/Portfolio"
                >
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
import axios from "axios";

export default {
  name: "PortfolioWriter",
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "입력해주세요!",
      v => (v && v.length <= 30) || "30자 이내로 입력해주세요!"
    ],
    imageName: "",
    imageUrl: "",
    imageFile: "",
    body: "",
    imageDeleteHash: "",
    portfolios: [],
    portfolio: [],
    language: "",
    complete: "",
    people: "",
    uploadImage: false
  }),
  mounted() {
    this.getPortfolios();
    this.getPortfoliosByIndex();
    if (
      this.$store.state.userauth != "관리자" &&
      this.$store.state.userauth != "팀원"
    ) {
      swal ( "Authorization" , "글을 작성할 권한이 없습니다." ,  "info" )
      this.$router.push("/Portfolio");
    }
  },
  methods: {
    getBody(msg) {
      this.body = msg;
    },
    pickFile() {
      this.$refs.image.click();
    },
    uploadImg() {
      var form = new FormData();
      form.append("image", this.imageFile);
      axios({
        method: "POST",
        url: "https://api.imgur.com/3/image",
        data: form,
        headers: {
          Authorization: "Client-ID b88c70b3b88c82d"
        },
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false
      }).then(response => {
        this.imageDeleteHash = response.data.data.deletehash;
      });
    },
    uploadToAlbum() {
      var form = new FormData();
      form.append("deletehashes[]", this.imageDeleteHash);

      axios({
        method: "POST",
        url: "https://api.imgur.com/3/album/ZMohAFTFD1Ti1YV/add",
        data: form,
        headers: {
          Authorization: "Client-ID b88c70b3b88c82d"
        },
        mimeType: "multipart/form-data",
        processData: false,
        contentType: false
      });
    },
    onFilePicked(e) {
      const files = e.target.files;
      this.uploadImage = true;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
          this.uploadImg();
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      this.uploadToAlbum();
      if (this.portfolios.length == 0)
        FirebaseService.postPortfolio(
          this.title,
          this.body,
          this.imageUrl,
          1,
          this.complete,
          this.language,
          this.people,
          this.$store.state.user.email
        );
      else
        FirebaseService.postPortfolio(
          this.title,
          this.body,
          this.imageUrl,
          this.portfolios[0].uk + 1,
          this.complete,
          this.language,
          this.people,
          this.$store.state.user.email
        );
      location.href = "/Portfolio";
    },
    update() {
      if (this.uploadImage === true) {
        FirebaseService.postPortfolio(
          this.portfolio.title,
          this.portfolio.body,
          this.imageUrl,
          this.portfolio.uk,
          this.portfolio.language,
          this.portfolio.complete,
          this.portfolio.people,
          this.$store.state.user.email
        );
        FirebaseService.deletePortfolio(this.$route.query.id);
      } else {
        FirebaseService.editPortfolio(
          this.portfolio.title,
          this.portfolio.body,
          this.portfolio.language,
          this.portfolio.complete,
          this.portfolio.people,
          this.portfolio.id
        );
      }
      location.href = "/Portfolio";
    },
    async getPortfoliosByIndex() {
      this.portfolio = await FirebaseService.getPortfoliosByIndex(
        this.$route.query.id
      );
    },
    async getPortfolios() {
      this.portfolios = await FirebaseService.getPortfolios();
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

#editbody {
  border: 0.5px solid lightgray;
  padding: 20px;
}

#gap {
  padding: 2px 20px 20px 10px;
}
</style>
