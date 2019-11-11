<template>
  <footer>
    <center>
      <div>
        <ul>
          <a style="color:black" href="#">About Me</a> |
          <a style="color:black" href="#">Terms of Service(이용약관)</a> |
          <a style="color:black" href="/sitemap">사이트맵(SiteMap)</a> |
          &nbsp&nbsp&nbsp&nbsp<v-icon style="height: 20px;">home</v-icon>광주광역시 광산구 우산동 삼성전자 그린2캠퍼스
        </ul>
      </div>
      <br />
      <div style="font-size:12px;">
        Copyright ⓒ 2019 SSAFY ShinSung Portfolio. All Rights Reserved
      </div>
    </center>
  </footer>
</template>

<script>
import "../CSS/aTag.css"

export default {
  data() {
    return{

    }
  }
}
</script>

<style>
footer {
  justify-content: center;
  padding: 5px;
  background-color: darkgray;
  color: black;
  height: 80px;
}
</style>
