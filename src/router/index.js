import { createRouter, createWebHistory } from "vue-router";
import { BookSingle, BookTable, LoginPage } from "@/pages";

const routes = [
  {
    path: "/",
    name: "book",
    component: BookTable,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/book/:id",
    name: "single-book",
    component: BookSingle,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userIsRegistered = localStorage.getItem("token");

  if (to.path === "/login") {
    if (!userIsRegistered) {
      next();
    } else {
      next("/");
    }
  } else if (to.meta.requiresAuth) {
    if (userIsRegistered) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
