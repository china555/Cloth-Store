import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Secure from "../views/secure.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    redirect: {
      name: "login"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/secure",
    name: "secure",
    component: Secure
  }
];

const router = new VueRouter({
  routes
});

export default router;
