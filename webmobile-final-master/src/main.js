import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueSimplemde from "vue-simplemde";
import "simplemde/dist/simplemde.min.css";
import "font-awesome/css/font-awesome.min.css";
import GitLabAPI from "vue-gitlab-api";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VModal from "vue-js-modal";
// vue-resource is needed too
import VueResource from "vue-resource";

import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "codemirror/lib/codemirror.css";
import { Editor, Viewer } from "@toast-ui/vue-editor";

Vue.component("editor", Editor);
Vue.component("viewer", Viewer);

Vue.use(VueResource);

Vue.use(VModal, { dynamic: true });
Vue.use(GitLabAPI, {
  url: "https://lab.ssafy.com",
  token: "bCRCA4CavF2586_aCBEq"
});

const { detect } = require("detect-browser");
const browser = detect();
// console.log(browser.name)
if (browser.name != "chrome") {
  swal ( "Chorme Optimize" , "해당 사이트는 크롬에 최적화 되어 있습니다." ,  "info" )
}

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: "fa4",
  theme: {
    primary: "#3f51b5",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});

Vue.use(VueSimplemde);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
