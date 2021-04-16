import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Create from "../views/Create.vue";

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
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_PUBLIC_FIREBASE_DATABASE_URL),
  routes,
});

export default router;
