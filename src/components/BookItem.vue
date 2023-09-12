<template>
	<div class="book-container">
		<span class="img">
			<router-link :to="'/book/' + props.book.id">
				<img :src="props.book.image" alt="" />
			</router-link>
		</span>
		<div class="bookDetails">
			<h3>
				<router-link style="text-decoration: none; color: black" :to="'/book/' + props.book.id">{{
					props.book.title
				}}</router-link>
			</h3>
			<div class="authors">
				<p v-for="author of props.book.authors" :key="author + Date.now()">
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
	flex-direction: column;
	align-items: center;
	border: 2px solid #2c3e50;
	width: 300px;
	height: 500px;
	background-color: #f3f3f3;
	padding: 20px;
	font-family: sans-serif;
}

@media screen and (max-width: 1790px) {
	.book-container {
		width: 350px;
		height: 470px;
	}
}

@media screen and (max-width: 1680px) {
	.book-container {
		width: 430px;
		height: 570px;
	}

	h3,
	.authors {
		width: 350px;
	}
}

@media screen and (max-width: 1500px) {
	
}

.bookDetails {
	display: flex;
	flex-direction: column;
	gap: 3px;
	align-items: flex-start;
}

.img {
	height: 80%;
	width: 80%;
	background-color: #17bb7f;
}

.img img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}

h3 {
	font-size: 17px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: start;
	width: 200px; /* Adjust the width to your desired value */
}

.authors {
	display: flex;
	gap: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 200px; /* Adjust the width to your desired value */
}

p {
	font-size: 18px;
	color: rgb(75, 75, 75);
}
</style>
