<template>
  <!-- 번역되는 공간, 번역버튼 -->
  <div style="width:100%">
    <div class="headline text2">{{ title }}</div>
    <span class="grey--text text1">{{ body }}</span>
    <div align="end" class="pt-1">
      <button v-on:click="translateText"><v-icon>g_translate</v-icon></button>
    </div>
  </div>
</template>

<script src="https://kit.fontawesome.com/0815a79704.js"></script>
<script>
export default {
  props: {
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  data() {
    return {
      sw: "false",
      result: []
    };
  },
  methods: {
    translateText() {
      if ((this.sw = !this.sw)) {
        fromLang = "en";
        toLang = "ko";
      } else {
        fromLang = "ko";
        toLang = "en";
      }

      let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
      url += "&q=" + encodeURI(this.body);
      url += `&source=${fromLang}`;
      url += `&target=${toLang}`;

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          var jsonString = response.data.translations[0].translatedText;
          this.body = jsonString.replace(/&#39;/g, "'");
        })
        .catch(error => {
          console.log(
            "There was an error with the translation request: ",
            error
          );
        }),
        (url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`);
      url += "&q=" + encodeURI(this.title);
      url += `&source=${fromLang}`;
      url += `&target=${toLang}`;

      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          var jsonString = response.data.translations[0].translatedText;
          this.title = jsonString.replace(/&#39;/g, "'");
        })
        .catch(error => {
          console.log(
            "There was an error with the translation request: ",
            error
          );
        });
    }
  }
};

let fromLang = "ko";
let toLang = "en";

const API_KEY = "AIzaSyA8QbUNckbHV7BIUjrhqbc40PL29VvuV6k";
</script>
