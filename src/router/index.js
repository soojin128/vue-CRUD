import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Read",
    
    component: () =>
      import("@/components/Read.vue"),
  },
  {
    path: "/create/:contentId?",
    name: "Create",
    
    component: () =>
      import("@/components/Create.vue"),
  },
  {
    path: "/detail/:contentId",
    name: "Detail",
    
    component: () =>
      import("@/components/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
