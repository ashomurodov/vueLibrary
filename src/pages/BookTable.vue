<template>
	<div class="searchBar">
		<form @submit.prevent="searchBooks">
			<input type="text" v-model="SearchValue" />
			<button>Submit</button>
		</form>
	</div>
	<h1>I'm BookTable</h1>
	<template v-if="loader">
		<div class="loader"><LoaderComponent :loading="loader" /></div>
	</template>
	<template v-else>
		<div class="bookMenu">
			<BookItem v-for="(book, index) of bookList" :key="index" :book="bookMapper.Book(book)" />
		</div>
	</template>
</template>

<script setup>
import BookItem from "../components/BookItem.vue";
import LoaderComponent from "../components/LoaderComponent.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { bookMapper } from "@/mappers";

const SearchValue = ref("apple");
const bookList = ref([]);
const loader = ref(true);

const searchBooks = async () => {
	loader.value = true;
	try {
		const { data } = await axios.get(
			"https://www.googleapis.com/books/v1/volumes?q=" +
				SearchValue.value +
				"&key=AIzaSyBW-h2HJvTP6XspPZ6-24-csP_NGo8McZ8"
		);
		bookList.value = data.items;
		loader.value = false;
	} catch (error) {
		console.log("ERRROOORRR");
		console.log(error);
		loader.value = false;
	}

	console.log(bookList.value);
};

onMounted(() => {
	searchBooks();
	console.log("Mounted");
});
</script>

<style>
.bookMenu {
	padding: 10px 100px;
	display: grid;
	place-items: center;
	grid-template-columns: auto auto auto auto auto;
	gap: 20px;
}

@media screen and (max-width: 1790px) {
	.bookMenu {
		padding: 10px 80px;
		grid-template-columns: auto auto auto auto;
	}
}

@media screen and (max-width: 1680px) {
	.bookMenu {
		padding: 10px 65px;
		grid-template-columns: auto auto auto;
	}
}

@media screen and (max-width: 1500px) {
	.bookMenu {
		padding: 10px 55px;
		grid-template-columns: auto auto;
	}
}

@media screen and (max-width: 1050px) {
	.bookMenu {
		padding: 10px 25px;
		grid-template-columns: auto;
	}
}

.loader {
	display: grid;
	place-items: center;
	height: 80vh;
}
</style>
