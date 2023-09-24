import { createRouter, createWebHistory } from "vue-router";
import { HomePage, LikedBooksPage, SingleBookPage } from "@/views";

import { isTokenExpired, isUserCanAccessMainPage } from "@/utils";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: { requiresAuth: true },
    },
    {
      path: "/book/:id",
      name: "singleBook",
      component: SingleBookPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/book/liked",
      name: "likedBooks",
      component: LikedBooksPage,
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const accessToMainPages = isUserCanAccessMainPage();

  if (to.path === "/login") {
    if (!accessToMainPages) {
      next();
    } else {
      next("/");
    }
  } else if (to.meta.requiresAuth) {
    if (accessToMainPages) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
