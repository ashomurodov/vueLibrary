<template>
	<div class="book-container">
		<span class="img"></span>
		<div class="bookDetails">
			<h3>{{ props.book.volumeInfo.title }}</h3>
			<div class="authors">
				<p v-for="author of props.book.volumeInfo.authors" :key="author + Date.now()">
					{{ author }}
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
	book: Object,
});
</script>
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.book-container {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border: 2px solid #2c3e50;
	width: 700px;
	height: 140px;
	background-color: #f3f3f3;
	padding: 20px;
	font-family: sans-serif;
}

.img {
	width: 100px;
	height: 100%;
	background-color: #17bb7f;
}

h3 {
	font-size: 20px;
}

p {
	font-size: 18px;
	color: rgb(75, 75, 75);
}
</style>
