import { createRouter, createWebHistory } from "vue-router";
// import BookSingle from "../pages/BookSingle.vue";
import { BookSingle, BookTable, LoginPage } from "@/pages";

const routes = [
	{
		path: "/",
		name: "book",
		component: BookTable,
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
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
