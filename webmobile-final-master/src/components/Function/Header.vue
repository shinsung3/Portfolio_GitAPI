<template>
  <v-container>
    <v-toolbar flat fixed id="background1">
      <v-toolbar-side-icon to="/home">
        <v-img :src="getImgUrl('bee.png')" aspect-ratio="1.0" />
      </v-toolbar-side-icon>
      <v-toolbar-title class="DokdoHeader">
        <router-link to="/home">
          <span class="DokdoHeader" id="aTag">할할놀놀</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="this.$store.state.accessToken == ''" flat to="/Login">
          <span class="DokdoHeader2">Login</span>
        </v-btn>
        <template v-else>
          <v-toolbar-side-icon>
            <v-img :src="getImgUrl('bee.png')" aspect-ratio="1.0" />
          </v-toolbar-side-icon>
          <span class="DokdoHeader2 mt-3 mr-2">
            <template>
              <v-dialog v-model="dialogModify" persistent max-width="600px">
                <template v-slot:activator="{ on }" class="DokdoHeader2">
                  <v-btn
                    round
                    color="#ADD8E6"
                    dark
                    v-on="on"
                    data-tooltip-text="클릭시 회원정보 수정"
                  >
                    <b style="font-size:20px">{{
                      $store.state.user.displayName
                    }}</b>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title style="align-items:auto">
                    <span xs-3 id="modaltitle" class="DokdoList mr-5 pr-5">
                      회원정보 수정
                      <v-icon size="25" color="black">fa-wrench</v-icon>
                    </span>
                    <span class="offset-12 ml-5 pl-5">
                      <v-btn flat class="ml-5 pl-5" @click="userDelete"><i class="fas fa-user-slash pl-5"></i>탈퇴</v-btn>
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-container grid-list-md>
                      <v-flex xs12>
                        <span label="Email*">
                          {{ $store.state.user.email }}
                        </span>
                      </v-flex>
                      <v-flex xs12>
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                          v-model="password"
                        ></v-text-field>
                      </v-flex>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-grey" flat @click="modify">완료</v-btn>
                    <v-btn color="blue-grey" flat @click="cancleModify">
                      취소
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </template>

            님 반갑습니다!!
          </span>
          <v-btn flat to="/home" @click="setLogOut">
            <span class="DokdoHeader2">Logout</span>
          </v-btn>
        </template>
        <v-btn flat to="/info">
          <span class="DokdoHeader2">Profile</span>
        </v-btn>
        <v-btn flat to="/Post">
          <span class="DokdoHeader2">Skill</span>
        </v-btn>
        <v-btn flat to="/Portfolio">
          <span class="DokdoHeader2">Portfolio</span>
        </v-btn>
        <v-btn flat to="/repository">
          <span class="DokdoHeader2">Project</span>
        </v-btn>
        <v-btn flat to="/admin" v-if="this.$store.state.userauth == '관리자'">
          <span class="DokdoHeader2">Admin</span>
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
        <v-icon color="gray">menu</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-navigation-drawer
      right
      class="sidebar"
      v-model="drawer"
      :mini-variant="mini"
      fixed
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="../../assets/icon.jpg" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              <span>할할놀놀</span>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <div v-for="(item, i) in items" :key="i">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-btn flat v-bind:to="item.href">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </div>

        <v-list-tile>
          <v-list-tile-action>
            <img src="../../assets/login.svg" width="24px" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn flat to="/Login" v-if="this.$store.state.accessToken == ''">
              <v-list-tile-title>Login</v-list-tile-title>
            </v-btn>
            <v-btn flat to="/home" v-else @click="setLogOut">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import FirebaseService from "../../services/FirebaseService.js";
import "../../CSS/aTag.css";

export default {
  name: "FooterIcon",
  data: () => ({
    drawer: null,
    mini: false,
    items: [
      {
        title: "Home",
        icon: "home",
        href: "/home"
      },
      {
        title: "Portfolio",
        icon: "dashboard",
        href: "/Portfolio"
      },
      {
        title: "skill",
        icon: "event",
        href: "/Post"
      },
      {
        title: "Project",
        icon: "folder_open",
        href: "/Repository"
      }
    ],
    dialogModify: false,
    email: "",
    password: "",
    nickname: ""
  }),
  created() {
    FirebaseService.loginPersistence();
  },
  methods: {
    async setLogOut() {
      this.$store.state.user = "";
      this.$store.state.accessToken = "";
      FirebaseService.Logout();
    },
    getImgUrl(img) {
      return require("../../assets/" + img);
    },
    async modify() {
      FirebaseService.userModify(this.password);
      this.password = "";
      this.dialogModify = false;
      this.$router.push("/home");
    },
    cancleModify() {
      this.password = "";
      this.dialogModify = false;
    },
    userDelete() {
      FirebaseService.userDelete();
      this.dialogModify = false;
      this.setLogOut();
    }
  }
};
</script>

<style>
#background1 {
  background-color: floralwhite;
}

#signupval {
  width: 4%;
  color: #2a7189;
}

[data-tooltip-text]:hover {
  position: relative;
}

[data-tooltip-text]:after {
  -webkit-transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
  -moz-transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transition: bottom 0.3s ease-in-out, opacity 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
  -moz-box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
  box-shadow: 0px 0px 3px 1px rgba(50, 50, 50, 0.4);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 7px 12px;
  position: absolute;
  width: auto;
  min-width: 50px;
  max-width: 300px;
  word-wrap: break-word;
  z-index: 9999;
  opacity: 0;
  left: -9999px;
  top: 90%;

  content: attr(data-tooltip-text);
}

[data-tooltip-text]:hover:after {
  top: 130%;
  left: 0;
  opacity: 1;
}

</style>
