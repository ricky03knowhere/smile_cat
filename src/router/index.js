import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import VideosView from "@/views/VideosView.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/videos",
      name: "videos",
      component: VideosView,
    },
  ],
});

export default router;
