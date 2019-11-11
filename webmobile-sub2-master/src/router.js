import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";
import PostPage from "./views/PostPage.vue";
import PortfolioPage from "./views/PortfolioPage.vue";
import LoginPage from "./views/LoginPage.vue";
import PortfolioWriter from "./views/PortfolioWriter.vue";
import Repository from "./views/RepositoryPage.vue";
import Graph from "./views/GraphPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
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
      path: "/writer",
      name: "writer",
      component: PortfolioWriter
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
    }
  ]
});
