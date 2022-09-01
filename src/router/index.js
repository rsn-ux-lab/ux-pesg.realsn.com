/* Router */
import Vue from "vue";
import Router from "vue-router";

//MAIN
import Main from "@/views/Main";
import Contact from "@/views/Contact";
import Insight from "@/views/Insight";
import Dashboard from "@/views/Dashboard";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: Main,
      component: Main,
    },
    {
      path: "/dashboard",
      name: Dashboard,
      component: Dashboard,
    },
    {
      path: "/insight",
      name: Insight,
      component: Insight,
    },
    {
      path: "/contact",
      name: Contact,
      component: Contact,
    },
  ],
});

export default router;
