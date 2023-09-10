<template>
	<h1>I'm BookTable</h1>
	<div class="bookMenu">
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
		<BookItem />
	</div>
</template>

<script setup>
import BookItem from "../components/BookItem.vue";
</script>

<style>
.bookMenu {
	padding: 20px 100px;
	display: grid;
	grid-template-columns: auto auto;
}
</style>
