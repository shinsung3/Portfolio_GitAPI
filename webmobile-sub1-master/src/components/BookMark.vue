<template>
  <v-container>
    <v-btn fab dark color="cyan" @click="please" href="#">
      <v-icon dark>add</v-icon>
    </v-btn>
    <b>← 이 페이지를 즐겨찾기하고 싶다면 버튼을 클릭하세요.</b>
  </v-container>
</template>

<script>
export default {
  methods: {

    please(title, url) {
      if (document.all) {
        window.external.AddFavorite(url, title);
      }
      //Chrome
      else if (window.chrome) {
        alert("Ctrl+D키를 누르시면 즐겨찾기에 추가하실 수 있습니다.")
      }
      //Firefox
      else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
      }
      //Opera
      else if (window.opera && window.print) {
        var elem = document.createElement('a');
        elem.setAttribute('href', url);
        elem.setAttribute('title', title);
        elem.setAttribute('rel', 'sidebar');
        elem.click();
      }
    }
  }
}
</script>
