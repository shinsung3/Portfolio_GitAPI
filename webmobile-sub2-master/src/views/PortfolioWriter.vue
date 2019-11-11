<template>
  <div class="py-3">
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <h3
        class="DokdoFont"
        v-resize-text="{
          ratio: 1.3,
          minFontSize: '30px',
          maxFontSize: '100px',
          delay: 200
        }"
        slot="text"
      >
        Portfolio Writer
      </h3>
      <div class="DokdoSubTitle" slot="text">
        말은 쉽지, 코드를 보여줘.
      </div>
      <br />
      <div class="DokdoSubTitle" slot="text">
        Talk is cheap. Show me the code.
      </div>
    </ImgBanner>
    <v-layout>
      <v-flex>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-container>
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
              <markdown-editor v-model="body"></markdown-editor>
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
              <v-btn color="success"@click="submit">
                업로드<img src="https://image.flaticon.com/icons/svg/261/261868.svg" width="35px"/>
              </v-btn>
              <v-btn
                @click.stop="reset()"
                class="buttonWriter"
                href="/Portfolio"
              >
                취소
              </v-btn>
            </v-flex>
          </v-container>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import FirebaseService from "@/services/FirebaseService";
import ImgBanner from "../components/ImgBanner";
import "../CSS/DokdoFont.css";
import axios from 'axios'

export default {
  name: "PortfolioPage",
  data: () => ({
    valid: true,
    title: '',
    titleRules: [
      v => !!v || "제목을 입력해주세요!",
      v => (v && v.length <= 30) || "제목은 30자 이내로 입력해주세요!"
    ],
    imageName: '',
    imageUrl: '',
    imageFile: '',
    body: '',
    imageDeleteHash: ''
  }),
  components: {
    ImgBanner
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
       method: 'POST',
       url: 'https://api.imgur.com/3/image',
       data: form,
       headers: {
         Authorization: 'Client-ID b88c70b3b88c82d'
       },
       mimeType: 'multipart/form-data',
       processData: false,
       contentType: false
      }).then(response => {
        this.imageDeleteHash = response.data.data.deletehash;
       })
    },
    uploadToAlbum() {
      var form = new FormData();
      form.append("deletehashes[]", this.imageDeleteHash);

      axios({
       method: 'POST',
       url: 'https://api.imgur.com/3/album/ZMohAFTFD1Ti1YV/add',
       data: form,
       headers: {
         Authorization: 'Client-ID b88c70b3b88c82d'
       },
       mimeType: 'multipart/form-data',
       processData: false,
       contentType: false
      }).then(response => {

      })
    },
    onFilePicked(e) {
      const files = e.target.files;
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
      FirebaseService.postPortfolio(this.title, this.body, this.imageUrl);
      location.href="/Portfolio"
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
