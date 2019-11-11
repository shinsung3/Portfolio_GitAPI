<template>
  <footer>
    <v-flex class="hidden-sm-and-down">
      <!-- 날씨위젯 -->
      <weather
        api-key="ffefdc2265390e7ff31988ef8fa4eb32"
        title="Weather"
        latitude="36.348315"
        longitude="127.390594"
        language="ko"
        units="uk"
      >
      </weather>
      <div id="footer">
        <div style="position:absolute text; text-align:center;">
          <ul>
            <a style="color:black" href="#">About Me</a> |
            <a style="color:black" href="#">Terms of Service(이용약관)</a> |
            <a
              style="color:black"
              href="https://lab.ssafy.com/nnnangni/webmobile-sub2"
              >사이트맵(SiteMap)</a
            >
            &nbsp&nbsp&nbsp&nbsp<v-icon style="height: 20px;">home</v-icon>광주광역시 광산구 우산동 삼성전자 그린2캠퍼스
          </ul>
        </div>

      <div style="font-size:12px; text-align:center; ">
        김녹형, 김현일, 박나원, 조신성, 최훈석
      </div><br/>

      <div style="font-size:12px; text-align:center;">
        Copyright ⓒ 2019 SSAFY ShinSung Portfolio. All Rights Reserved
      </div>
    </div>
    </v-flex>

    <v-flex class="hidden-md-and-up">
      <div class="p-5">
        <ul style="padding-top:24px">
          <a style="color:black" href="https://tlstjd436.blog.me/"><i class="fas fa-bold fa-2x"></i></a>&nbsp&nbsp
          <a style="color:black" href="https://lab.ssafy.com/nnnangni/webmobile-sub2"><i class="fab fa-gitlab fa-2x"></i></a>&nbsp&nbsp
          <a style="color:black" href="https://github.com/nnnangni"><i class="fab fa-github fa-2x"></i></a>
        </ul>
      </div>
    </v-flex>
  </footer>
</template>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<!-- <script src="https://kit.fontawesome.com/0815a79704.js"></script> -->

<script>
import VueWeatherWidget from "vue-weather-widget";
import "vue-weather-widget/dist/css/vue-weather-widget.css";

export default {
  components: {
    weather: VueWeatherWidget
  }
};
</script>
<style>
#footer {
  justify-content: center;
  background-color: darkgray;
  color: black;
  height: 80px;
}
#local {
  font-weight: bold;
  font-size: 20px;
}

.fe_daily {
  display: hidden !important;
}
</style>
