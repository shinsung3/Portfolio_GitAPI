<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-flex id="inline">
            <center>
              <img
                src="https://image.flaticon.com/icons/svg/346/346195.svg"
                width="70px"
              />
              <hr id="hrCss" />
              <br />
              <img src="../assets/1.gif" width="150px" />
              <h1 class="NameFont">Park Nawon</h1>
              <hr id="hrCss" />
              <br />
              <div id="pdSize" class="info1">Python</div>
              <div id="pdSize" class="info1">Vue.js</div>
              <div id="pdSize" class="info1">CSS3</div>
              <div id="pdSize" class="info1">HTML5</div>
              <div id="pdSize" class="info1">Django</div>
              <div id="pdSize" class="info1">Javascript</div>
              <div id="pdSize" class="info1">R</div>
              <div class="my-2">
                <v-btn round depressed large id="but1">
                  Nnnangni
                </v-btn>
              </div>
            </center>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img
                src="https://image.flaticon.com/icons/svg/1113/1113432.svg"
                width="70px"
              />
              <hr id="hrCss1" />
              <br />
              <img src="../assets/12.gif" width="150px" />
              <h1 class="NameFont">Kim HyunIl</h1>
              <hr id="hrCss1" />
              <br />
              <div id="pdSize" class="info3">JAVA</div>
              <div id="pdSize" class="info3">Javascript</div>
              <div id="pdSize" class="info3">Node.js</div>
              <div id="pdSize" class="info3">Vue.js</div>
              <div id="pdSize" class="info3">C++</div>
              <div id="pdSize" class="info3">CSS3</div>
              <div id="pdSize" class="info3">HTML5</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but2">Gerrad Jr.</v-btn>
            </div>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img
                src="https://image.flaticon.com/icons/svg/1965/1965132.svg"
                width="70px"
              />
              <hr id="hrCss2" />
              <br />
              <img src="../assets/23.gif" width="150px" />
              <h1 class="NameFont">Jo ShinSung</h1>
              <hr id="hrCss2" />
              <br />
              <div id="pdSize" class="info2">JAVA</div>
              <div id="pdSize" class="info2">Spring Framework</div>
              <div id="pdSize" class="info2">C/C++</div>
              <div id="pdSize" class="info2">Vue.js</div>
              <div id="pdSize" class="info2">CSS3</div>
              <div id="pdSize" class="info2">HTML5</div>
              <div id="pdSize" class="info2">MySql/MyBatis</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but3">Nustar★</v-btn>
            </div>
          </v-flex>
          <v-flex id="inline">
            <center>
              <img
                src="https://image.flaticon.com/icons/svg/1328/1328357.svg"
                width="70px"
              />
              <hr id="hrCss3" />
              <br />
              <img src="../assets/4.gif" width="150px" />
              <h1 class="NameFont">Choi HunSeok</h1>
              <hr id="hrCss3" />
              <br />
              <div id="pdSize" class="info4">JAVA</div>
              <div id="pdSize" class="info4">HTML5</div>
              <div id="pdSize" class="info4">JQuery</div>
              <div id="pdSize" class="info4">R</div>
              <div id="pdSize" class="info4">Vue.js</div>
              <div id="pdSize" class="info4">Spring Boot</div>
              <div id="pdSize" class="info4">C</div>
            </center>
            <div class="my-2">
              <v-btn round depressed large id="but4">Huuuuulu</v-btn>
            </div>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "InfoPage"
};
</script>

<style>
#inline {
  display: inline-block;
  padding: 60px;
}

#hrCss {
  border: 0;
  height: 6px;
  background: #eaceae;
}

#hrCss1 {
  border: 0;
  height: 6px;
  background: #c8a88c;
}

#hrCss2 {
  border: 0;
  height: 6px;
  background: #c88566;
}

#hrCss3 {
  border: 0;
  height: 6px;
  background: #81665c;
}

#pdSize {
  padding: 5px;
}

.info1 {
  color: #eaceae;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info2 {
  color: #c88566;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info3 {
  color: #c8a88c;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

.info4 {
  color: #81665c;
  font-size: 20px;
  font-family: "Acme", sans-serif;
}

#but1 {
  background-color: #eaceae;
  color: white;
}

#but2 {
  background-color: #c8a88c;
  color: white;
}

#but3 {
  background-color: #c88566;
  color: white;
}

#but4 {
  background-color: #81665c;
  color: white;
}
</style>
