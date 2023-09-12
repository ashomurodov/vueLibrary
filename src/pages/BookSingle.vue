<template>
	<template v-if="loader">
		<div class="loader">
			<LoaderComponent :loading="loader" />
		</div>
	</template>
	<template v-else>
		<div class="router">
			<router-link style="text-align: start; color: #000; text-decoration: none" to="/"
				><span style="text-align: start">Back To Menu</span></router-link
			>
		</div>
		<div class="container">
			<h1 class="title">{{ book.title }}</h1>
			<div class="aboutBook">
				<div class="img-container">
					<img :src="book.image" alt="" />
				</div>
				<div class="about-container">
					<div class="book-authors text-container">
						<h6>Authors:</h6>
						<p>{{ book.authors.length > 0 ? "" : "No Author" }}</p>
						<div class="author-container">
							<p v-for="author of book.authors" :key="author + Date.now()">
								{{ author }}
							</p>
						</div>
					</div>
					<div class="published-date text-container">
						<h6>Published at:</h6>
						<p>{{ formatDate(book.publishDate) }}</p>
					</div>
					<div class="btn-container">
						<a :href="book.buyLink" target="_blank"><button class="buy-btn">Buy It!</button></a>
						<a :href="book.previewLink" target="_blank"
							><button class="preview-btn">Preview</button></a
						>
					</div>
					<div class="description">
						{{ book.description.length > 0 ? "" : "No Description" }}
						<div class="description" style="text-align: start" v-html="book.description"></div>
					</div>
				</div>
			</div>
		</div>
	</template>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { bookMapper } from "@/mappers";
import LoaderComponent from "../components/LoaderComponent.vue";
import { formatDate } from "../utils.js";

const route = useRoute();

const qparam = ref(route.params.id);
const book = ref([]);
const loader = ref(true);

onMounted(async () => {
	const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${qparam.value}`);

	book.value = bookMapper.Book(data);
	loader.value = false;
});
</script>

<style scoped>
.container {
	padding: 20px 120px;
}

.router {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0px 120px;
	margin-top: 80px;
	width: 400px;
}

.router span {
	border: 2px dashed #024f2b;
	color: #00462c;
	padding: 10px 20px;
	border-radius: 6px;
}

button {
	padding: 10px 14px;
	font-size: 20px;
	border: 3px solid #17bb7f;
	border-radius: 8px;
	background-color: #fff;
	cursor: pointer;
	color: #17bb7f;
	transition: all 0.3s ease;
}

.btn-container {
	display: flex;
	gap: 20px;
}

.preview-btn {
	border: 3px solid #00462c;
	color: #00462c;
}

.preview-btn:hover {
	border: 3px dashed #00462c;
}

button:hover {
	border: 3px dashed #17bb7f;
}

h1 {
	text-align: start;
	margin-bottom: 40px;
	font-size: 60px;
	color: #17bb7f;
}
.loader {
	display: grid;
	place-items: center;
	height: 100vh;
}

.aboutBook {
	display: flex;
	align-items: flex-start;
	gap: 100px;
	height: 510px;
	overflow: hidden;
}

.img-container img {
	width: 300px;
	object-fit: cover;
	border: 10px dotted #17bb7f;
}

.about-container .text-container {
	display: flex;
	gap: 10px;
	align-items: center;
}

.about-container {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
}

.author-container {
	display: flex;
	gap: 15px;
}

/* .description {
	width: 500px;
} */

.about-container h6 {
	font-size: 20px;
	color: #0d1e18b0;
	font-weight: 500;
}

h6.description__title {
	font-size: 40px;
	text-align: start;
}

.about-container p {
	font-size: 20px;
	color: #17bb7f;
	font-weight: bold;
}
</style>
