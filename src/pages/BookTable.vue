<template>
	<h1>I'm BookTable</h1>
	<div class="bookMenu">
		<template v-if="props.bookList.length">
			<BookItem v-for="(book, index) of props.bookList" :key="index" :book="book" />
		</template>
		<template v-else>
			<p>Loading...</p>
		</template>
	</div>
</template>

<script setup>
import BookItem from "../components/BookItem.vue";
import { defineProps, watch } from "vue";

const props = defineProps({
	bookList: Array,
});

watch(() => {
	console.log("[BOOK TABLE]", props.bookList);
});
</script>

<style>
.bookMenu {
	padding: 10px 100px;
	display: grid;
	grid-template-columns: auto auto;
	gap: 20px;
}
</style>
