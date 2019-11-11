import axios from 'axios';
// 구글 번역 api
const API_KEY = 'AIzaSyA8QbUNckbHV7BIUjrhqbc40PL29VvuV6k';
export default {
  // 번역 함수 구현
  translate(language,text){
    let fromLang = ""
    let detect_url = `https://translation.googleapis.com/language/translate/v2/detect?key=${API_KEY}`;
    detect_url += '&q=' + encodeURI(text);
    axios.get(detect_url,{
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then((response) => {
      fromLang = response.data.data.detections[0][0].language
    })

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${language}`;
    if (fromLang == language) {
      return text
    }
    else {
      return axios.get(url,{
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
      .then((response) => {
        // console.log(response.data.data.translations[0].translatedText)
        return response.data.data.translations[0].translatedText.replace(/&#39;/g,"'")
      })
    }
  },
}
