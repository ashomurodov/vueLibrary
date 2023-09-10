<template>
	<div class="searchBar">
		<form @submit.prevent="searchBooks">
			<input type="text" v-model="SearchValue" />
			<button>Submit</button>
		</form>
	</div>
	<BookTable :bookList="bookList" :key="bookList.length" />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

import BookTable from "./pages/BookTable.vue";

const SearchValue = ref("");
const bookList = ref([]);

const searchBooks = async () => {
	console.log(SearchValue.value);

	const { data } = await axios.get(
		"https://www.googleapis.com/books/v1/volumes?q=" + SearchValue.value
	);

	bookList.value = data.items;
	SearchValue.value = "";

	console.log(bookList.value);
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
