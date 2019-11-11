<template>
  <v-container>
    <v-toolbar flat fixed>
      <!-- 툴바 제목-->
      <v-toolbar-title>
        <span>
          <span></span>
          <v-flex xs12 sm3>
            <v-btn flat href="/" icon color="red">
              <v-icon>star</v-icon>
            </v-btn>
            <v-btn flat href="/"><b>디버깅은 조금만</b></v-btn>
          </v-flex>
        </span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- 툴바 항목들-->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="/Login">Login</v-btn>
        <v-btn flat href="/Portfolio">Portfolio</v-btn>
        <v-btn flat href="/Post">Post</v-btn>
        <v-btn flat href="/Repository">Project</v-btn>
      </v-toolbar-items>

      <!--삼단 바-->
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer">
        <v-icon color="gray">menu</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <!-- 삼단바 클릭시 생성-->
    <v-navigation-drawer right class="sidebar" v-model="drawer" :mini-variant="mini" fixed dark temporary>
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="../assets/gg1.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-btn flat href="/">
              <v-list-tile-title>디버깅은 조금만 </v-list-tile-title>
            </v-btn>
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

        <div v-for="item in items">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-btn flat href="/">
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-btn>
            </v-list-tile-content>
          </v-list-tile>
        </div>

        <v-list-tile>
          <v-list-tile-action>
            <img src="../assets/login.svg" width="24px">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn flat href="/Login">
              <v-list-tile-title>Login</v-list-tile-title>
            </v-btn>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import "../CSS/aTag.css"

export default {
  name: 'FooterIcon',
  data: () => ({
    drawer: null,
    items: [{
        title: 'Home',
        icon: 'home'
      },
      {
        title: 'Portfolio',
        icon: 'dashboard'
      },
      {
        title: 'Post',
        icon: 'far fa-list-alt'
      }
    ],
    mini: false,
    right: null,
  }),
}
</script>
