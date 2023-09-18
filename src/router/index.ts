import { createRouter, createWebHistory } from "vue-router";
import { HomePage, LikedBooksPage, SingleBookPage } from "@/views";

import { isTokenExpired } from "@/utils";

const router = createRouter({
  history: createWebHistory(),
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
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
  const userIsRegistered: { token: string; loginDate: string } = JSON.parse(
    localStorage.getItem("user_data")!
  );

  console.log(isTokenExpired());

  if (to.path === "/login") {
    if (!localStorage.getItem("user_data") || isTokenExpired()) {
      next();
    } else {
      next("/");
    }
  } else if (to.meta.requiresAuth) {
    if (userIsRegistered && userIsRegistered.token) {
      if (!isTokenExpired()) {
        next();
      } else {
        alert("Your token is expired pls resignIn");
        next("/login");
      }
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
