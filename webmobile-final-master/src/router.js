import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import PostPage from "./views/PostPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue";
import LoginPage from "./views/LoginPage.vue";
import Repository from "./views/RepositoryPage.vue";
import Graph from "./views/GraphPage.vue";
import AdminPage from "./views/AdminPage.vue";
import Info from "./views/InfoPage.vue";
import Intro from "./views/IntroPage.vue";

import PFDetail from "./components/Portfolio/PortfolioDetail.vue";
import PSDetail from "./components/Post/PostDetail.vue";
import Comments from "./components/Function/Comments.vue";
import Test from "./components/test.vue";
import PortfolioWriter from "./components/Portfolio/PortfolioWriter.vue";
import PostWriter from "./components/Post/PostWriter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro
    },
    {
      path: "/home",
      name: "home",
      component: HomePage
    },
    {
      path: "/post",
      name: "post",
      component: PostPage
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioPage
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/pfWriter",
      name: "pfwriter",
      component: PortfolioWriter
    },
    {
      path: "/psWriter",
      name: "pswriter",
      component: PostWriter
    },
    {
      path: "/repository",
      name: "repository",
      component: Repository
    },
    {
      path: "/graph",
      name: "graph",
      component: Graph
    },
    {
      path: "/pfDetail",
      name: "pfDetail",
      component: PFDetail
    },
    {
      path: "/psDetail",
      name: "psDetail",
      component: PSDetail
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminPage
    },
    {
      path: "/comment",
      name: "comment",
      component: Comments
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/info",
      name: "info",
      component: Info
    }
  ]
});
