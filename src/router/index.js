import { createRouter, createWebHistory } from "vue-router";
// import BookSingle from "../pages/BookSingle.vue";
import { BookSingle, BookTable } from "@/pages";

const routes = [
	{
		path: "/",
		name: "book",
		component: BookTable,
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
