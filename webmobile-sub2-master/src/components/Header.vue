<template>
  <v-container>
    <v-toolbar flat fixed>
      <v-toolbar-side-icon to="/">
        <v-icon style="color:black">favorite</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="DokdoHeader">
        <router-link to="/">
          <span class="DokdoHeader">할할놀놀</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="this.$store.state.accessToken == ''" flat to="/Login">
          <span class="DokdoHeader2">Login</span>
        </v-btn>
        <template v-else>
          <span
            v-if="this.$store.state.user.displayName != undefined"
            class="DokdoHeader2 mt-3 mr-2"
          >
            <b>{{ this.$store.state.user.displayName }}</b>님 반갑습니다!!
          </span>
          <span v-else class="DokdoHeader2 mt-3 mr-2">
            <b>{{ this.$store.state.accessToken }}</b>님 반갑습니다!!
          </span>
          <v-btn flat to="/" @click="setLogOut">
            <span class="DokdoHeader2">Logout</span>
          </v-btn>
        </template>
        <v-btn flat to="/Portfolio">
          <span class="DokdoHeader2">Portfolio</span>
        </v-btn>
        <v-btn flat to="/Post">
          <span class="DokdoHeader2">Post</span>
        </v-btn>
        <v-btn flat to="/Repository">
          <span class="DokdoHeader2">Project</span>
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
            <img src="../assets/icon.jpg" />
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
            <img src="../assets/login.svg" width="24px" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn flat to="/Login" v-if="this.$store.state.accessToken == ''">
              <v-list-tile-title>Login</v-list-tile-title>
            </v-btn>
            <v-btn flat to="/" v-else @click="setLogOut">
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import "../CSS/aTag.css";
import FirebaseService from "../services/FirebaseService.js";
import "../CSS/DokdoFont.css";

export default {
  name: "FooterIcon",
  data: () => ({
    drawer: null,
    items: [
      {
        title: "Home",
        icon: "home",
        href: "/"
      },
      {
        title: "Portfolio",
        icon: "dashboard",
        href: "/Portfolio"
      },
      {
        title: "Post",
        icon: "event",
        href: "/Post"
      },
      {
        title: "Project",
        icon: "folder_open",
        href: "/Repository"
      }
    ],
    mini: false,
    right: null
  }),
  created() {
    FirebaseService.loginPersistence();
  },
  methods: {
    async setLogOut() {
      this.$store.state.user = "";
      this.$store.state.accessToken = "";
      FirebaseService.Logout();
    }
  }
};
</script>
