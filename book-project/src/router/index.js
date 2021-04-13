import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home from "../views/Details.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/books/:id",
    name: "Details",
    component: Details,
    props: true,
    // route level code-splitting
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
