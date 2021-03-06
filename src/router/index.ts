import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BaseComponent from "../vue/BaseComponent.vue";
import VueXModules from "../vue/VueXMoudules.vue";
import VueXModulesMap from "../vue/VueXModulesMap.vue";
import ScriptSetup from "../vue/ScriptSetup.vue";
import TotalComponent from "../vue/Setup/TotalComponent.vue";
import TotalNaiveUi from "../vue/naive-ui/TotalNaiveUi.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/vue3",
    name: "vue3",
    component: BaseComponent,
  },
  {
    path: "/Vuex-modules",
    name: "Vuex-modules",
    component: VueXModules,
  },
  {
    path: "/Vuex-modules-map",
    name: "Vuex-modules-map",
    component: VueXModulesMap,
  },
  {
    path: "/script-setup",
    name: "script-setup",
    component: ScriptSetup,
  },
  {
    path: "/setup",
    name: "setup",
    component: TotalComponent,
  },
  {
    path: "/naive-ui",
    name: "naive-ui",
    component: TotalNaiveUi,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
