/* Router */
import Vue from "vue";
import Router from "vue-router";

//MAIN
import Home from "@/views/Home";
import Index from "@/views/Index";
import Dashboard from "@/views/Dashboard";
import Contact from "@/views/Contact";
import Insight from "@/views/Insight";

Vue.use(Router);

window.router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: Home,
      component: Home,
    },
    {
      path: "/index",
      name: Index,
      component: Index,
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

router.beforeEach(function (to, from, next) {
  // to: 이동할 url에 해당하는 라우팅 객체
  if (
    to.matched.some(function (routeInfo) {
      return routeInfo.meta.authRequired;
    })
  ) {
    // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
    alert("Login Please!");
  } else {
    // console.log("routing success : '" + to.path + "'");
    next(); // 페이지 전환
  }
});

export default router;
