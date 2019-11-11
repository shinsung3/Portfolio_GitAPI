// const this.body =
// const result = []
const sw = "false";
let fromLang = "ko";
let toLang = "en";
let list = [];
const API_KEY = "AIzaSyA8QbUNckbHV7BIUjrhqbc40PL29VvuV6k";

export default {
  translateText(title, body) {
    if ((this.sw = !sw)) {
      fromLang = "en";
      toLang = "ko";
    } else {
      fromLang = "ko";
      toLang = "en";
    }

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += "&q=" + encodeURI(body);
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
        body = jsonString.replace(/&#39;/g, "'");
        list.push(body);
      }),
      (url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`);
    url += "&q=" + encodeURI(title);
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
        title = jsonString.replace(/&#39;/g, "'");
        list.push(title);
      });
    return list;
  }
};
