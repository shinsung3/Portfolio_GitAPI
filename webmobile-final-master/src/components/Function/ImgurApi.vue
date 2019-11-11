<template>
  <div>
    <!-- <input
      class="write-select-img"
      id="write-select-img"
      type="file"
      name="file"
      ref="file"
      color="green darken-1"
      v-on:change="handleFileUpload"
    /> -->
    <v-text-field label="Select Image" @click="pickFile" v-model="imageName"  prepend-icon="attach_file"></v-text-field>
    <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
    <v-btn id="upload" color="warning" class="buttonWriter" v-on:click="uploadToAlbum">
      업로드
    </v-btn>
    <v-btn @click="getRandomImg">
      랜덤 이미지
    </v-btn>
    <v-dialog v-model="dialogImage" width="300px">
      <template v-slot:activator="{ on }">
        <v-btn id="getImg" @click="getAlbumImages" v-on="on">
          배너 선택
        </v-btn>
      </template>
      <v-card>
        <v-card-text v-for="obj in images">
          <div @click="changeBanner(obj.link)">
            <v-img :src="obj.link" ></v-img>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'ImgurAPI',
    data() {
      return {
        file: '',
        imageDeleteHash: '',
        images: [],
        dialogImage: false,
        imageName: '',
        imageUrl: '',
        imageFile: ''
      }
    },
    methods: {
      handleFileUpload(e) {
        this.file = this.$refs.file.files[0];
        this.uploadImg();
      },
      pickFile() {
        this.$refs.image.click();
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
      getRandomImg() {
        this.$store.state.BannerImgUrl = "https://source.unsplash.com/random/" + (Math.floor(Math.random() * 10) + 1) * 1600 + "x900";
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
          swal ( "Success" , "성공적으로 업로드되었습니다!" ,  "success" )
        })
      },
      getAlbumImages() {
        var form = new FormData();

        axios({
         method: 'GET',
         url: 'https://api.imgur.com/3/album/moeFMs7/images',
         data: form,
         headers: {
           Authorization: 'Client-ID b88c70b3b88c82d'
         },
         mimeType: 'multipart/form-data',
         processData: false,
         contentType: false
        }).then(response => {
          this.images = response.data.data;
        })
      },
      changeBanner(link) {
        this.$store.state.BannerImgUrl = link;
      },
      test(){
        var form = new FormData();
        axios({
         method: 'GET',
         url: 'https://api.imgur.com/3/account/nnnangni/album/moeFMs7',
         data: form,
         headers: {
           Authorization: "Bearer 42fbf8d26a7a6c3ccee78d41852010b6d4f29dd8"
         },
         mimeType: 'multipart/form-data',
         processData: false,
         contentType: false
        }).then(response => {
         })
      }
    }
  }

</script>
