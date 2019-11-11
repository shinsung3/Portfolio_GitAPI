<template>
  <v-container>
    <v-btn fab dark color="cyan" @click="please" href="#">
      <i class="fas fa-bookmark fa-lg"></i>
    </v-btn>
    <b><i class="fas fa-arrow-left"></i> 페이지 즐겨찾기</b>
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
