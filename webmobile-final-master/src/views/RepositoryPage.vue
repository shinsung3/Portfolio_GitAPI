<template>
  <div>
    <v-container>
      <!-- Gitlab 연동 -->
      <center>
        <h1
          class="DokdoList"
          v-resize-text="{
            ratio: 1.3,
            minFontSize: '15px',
            maxFontSize: '50px',
            delay: 200
          }"
        >
          <img
            src="https://image.flaticon.com/icons/svg/1430/1430304.svg"
            width="50px"
          />
          &nbsp 우리의 깃랩이 궁금하다면?!? &nbsp
          <img
            src="https://image.flaticon.com/icons/svg/1430/1430304.svg"
            width="50px"
          />
        </h1>
        <img
          src="https://image.flaticon.com/icons/svg/25/25700.svg"
          width="50px"
        />
      </center>
      <Gitlab></Gitlab>

      <!--Graph-->
      <v-flex class="hidden-sm-and-down">
        <center>
          <h1
            class="DokdoList"
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '15px',
              maxFontSize: '50px',
              delay: 200
            }"
          >
            Graph
          </h1>
        </center>
      </v-flex>
      <v-flex class="hidden-sm-and-down">
        <GraphDraw></GraphDraw>
      </v-flex>
      <center>
        <a href="/Graph" style="color:black">
          <h1
            class="DokdoList"
            v-resize-text="{
              ratio: 1.3,
              minFontSize: '15px',
              maxFontSize: '50px',
              delay: 200
            }"
          >
            Commit 현황 보러가기 &nbsp
          </h1>
          <img
            src="https://image.flaticon.com/icons/svg/64/64604.svg"
            width="70px"
          />
        </a>
      </center>
    </v-container>
  </div>
</template>

<script>
import Gitlab from "../components/Repository/GitlabButton.vue";
import GraphDraw from "../components/Repository/GraphDraw.vue";
import "../CSS/DokdoFont.css";

export default {
  name: "RepositoryPage",
  components: {
    Gitlab,
    GraphDraw
  }
};
</script>
