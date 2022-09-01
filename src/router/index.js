/* Router */
import Vue from "vue";
import Router from "vue-router";

//MAIN
import Main from "@/views/Main";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: Main,
      component: Main,
    },
  ],
});

export default router;
