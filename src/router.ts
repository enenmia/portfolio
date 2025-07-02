import { createRouter, createWebHistory } from "vue-router";
import Projects from "./pages/Projects.vue";
import Research from "./pages/Research.vue";
import All from "./pages/All.vue";
import Home from "./pages/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/research",
    name: "Research",
    component: Research,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
