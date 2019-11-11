<template>
  <div>
    <ImgBanner imgSrc="https://source.unsplash.com/random">
      <div style="line-height: 1.2em;font-size: 5vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Portfolio Writer</div>
      <h3 style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Do Hyeon', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        말은 쉽지, 코드를 보여줘.</h3>
      <br />
      <div style="line-height: 1.2em;font-size: 1vw;color: rgba(0, 0, 0, 0.69);font-family: 'Arial Black', sans-serif;" slot="text" id=".font-weight-regular.font-italic">
        Talk is cheap. Show me the code.</div>
    </ImgBanner>

    <v-container>
      <!-- Portfolio -->
      <v-layout>
        <v-flex xs12>
          <!-- title-->
          <v-flex xs12 sm6>
            <v-text-field v-model="message1" label="TITLE" placeholder="제목을 입력하세요"></v-text-field>
          </v-flex>

          <!--body-->
          <markdown-editor :options="options"></markdown-editor>

          <!--picture editor-->
          <div>
            <div class="file-upload-form">
              <img src="https://image.flaticon.com/icons/svg/126/126477.svg" width=30px />
              &nbsp &nbsp
              <input type="file" @change="previewImage" accept="image/*">
              <div class="image-preview" v-if="imageData.length > 0">
                <img class="preview" :src="imageData">
              </div>
              <v-btn class="buttonWriter">취소</v-btn>
              <v-btn color="warning" class="buttonWriter">글쓰기</v-btn>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ImgBanner from '../components/ImgBanner'
import PortfolioList from '../components/PortfolioList'

export default {
  name: 'PortfolioPage',
  components: {
    ImgBanner,
    PortfolioList,
  },
  data() {
    return {
      imageData: ""
    }
  },
  methods: {
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        }
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    }
  }
}
</script>

<style>
.buttonWriter {
  float: right;
}

.file-upload-form,
.image-preview {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 20px;
}

img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #DDD;
  padding: 5px;
}
</style>
