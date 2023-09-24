import { createRouter, createWebHistory } from "vue-router";
import { HomePage, LikedBooksPage, SingleBookPage } from "@/views";

import { isTokenExpired } from "@/utils";

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
  const userDataString = localStorage.getItem("user_data");

  if (to.path === "/login") {
    if (!userDataString || isTokenExpired()) {
      next();
    } else {
      next("/");
    }
  } else if (to.meta.requiresAuth) {
    if (userDataString) {
      try {
        const userIsRegistered = JSON.parse(userDataString);
        if (userIsRegistered && userIsRegistered.token && !isTokenExpired()) {
          next();
        } else {
          alert("Your token is expired, please sign in again");
          next("/login");
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        next("/login"); // Handle invalid JSON data
      }
    } else {
      next("/login"); // Handle the case where user data is not present
    }
  } else {
    next();
  }
});

export default router;
