<template>
	<template v-if="loader">
		<div class="loader">
			<LoaderComponent :loading="loader" />
		</div>
	</template>
	<template v-else>
		<div>
			<div class="aboutBook">
				<div class="img-container">
					<img :src="book.image" alt="" />
				</div>
				<div class="about-container">
					<div class="book-title">
						<h6>Title:</h6>
						<p>{{ book.title }}</p>
					</div>
					<div class="book-authors">
						<h6>Authors:</h6>
						<p>{{ book.authors.length > 0 ? "" : "No Author" }}</p>
						<div class="author-container">
							<p v-for="author of book.authors" :key="author + Date.now()">
								{{ author }}
							</p>
						</div>
					</div>
					<div class="published-date">
						<h6>Published at:</h6>
						<p>{{ formatDate(book.publishDate) }}</p>
					</div>
				</div>
			</div>
			<div class="description">
				<h6>Description:</h6>
				{{ book.description.length > 0 ? "" : "No Description" }}
				<div class="description" style="text-align: start" v-html="book.description"></div>
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
.loader {
	display: grid;
	place-items: center;
	height: 100vh;
}
</style>
