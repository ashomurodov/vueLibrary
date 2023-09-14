<template>
  <!-- loader  -->

  <template v-if="loader">
    <div class="loader">
      <LoaderComponent :loading="loader" />
    </div>
  </template>

  <!-- main single book component  -->
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
            <p>{{ !!book.authors?.length ? "" : "No Author" }}</p>
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
    <div class="sr_books">
      <h5>Maybe you like it!</h5>
      <div>
        <BookItem v-for="(book, index) of books" :key="index" :book="book" />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { bookMapper } from "@/mappers";
import { formatDate } from "../utils.js";
import { useRoute } from "vue-router";
import http from "@/http";

import { LoaderComponent, BookItem } from "@/components";
import type { IEntity } from "@/types";

const route = useRoute();

const qparam = ref(route.params.id);
const book = ref<IEntity.Book.Single>({
  id: 0,
  title: "",
  image: "",
  description: "",
  authors: ["", ""],
  buyLink: "",
  previewLink: "",
  publishDate: "",
});
const loader = ref<boolean>(true);

// Similiar to the fetched book
const books = ref<IEntity.Book.List>([]);

const fetchData = async () => {
  loader.value = true;

  try {
    const { data } = await http.get(`/${qparam.value}`);
    console.log(data);
    book.value = bookMapper.Book(data);

    const { data: sr_books } = await http.get(
      "?maxResults=2&q=" +
        book.value.title.slice(0, 4) +
        "&key=AIzaSyBIse3aE94iDf4rmBaJwaA_XQzjLi2NQSI"
    );

    console.log(sr_books);

    books.value = sr_books.items.map((book: {}) => bookMapper.Book(book));
  } catch (error) {
    console.error("Error loading data:", error);
  } finally {
    loader.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const watchRouteParams = () => {
  watch(
    () => route.params.id,
    (newId, oldId) => {
      if (newId !== oldId) {
        qparam.value = newId;
        fetchData();
      }
    }
  );
};

watchRouteParams();
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

h1 {
  text-align: start;
  margin-bottom: 40px;
  font-size: 60px;
  color: #17bb7f;
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

.loader {
  display: grid;
  place-items: center;
  height: 100vh;
}

.img-container img {
  width: 300px;
  object-fit: cover;
  border: 10px dotted #17bb7f;
}

.aboutBook {
  display: flex;
  align-items: flex-start;
  gap: 100px;
  height: 510px;
  overflow: hidden;
}

.sr_books {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 120px;
}

.sr_books h5 {
  font-size: 30px;
  margin-bottom: 20px;
  color: #17bb7f;
}

.sr_books div {
  display: flex;
  gap: 20px;
}

@media screen and (max-width: 1050px) {
  h1 {
    font-size: 40px;
    margin-top: 30px;
  }

  .router {
    padding: 0px 40px;
    width: 250px;
    font-size: 12px;
  }

  .sr_books {
    padding: 20px 40px;
  }

  .sr_books div {
    flex-direction: column;
  }
  .container {
    padding: 10px 40px;
  }
  .aboutBook {
    flex-direction: column;
    height: auto;
  }
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

.about-container h6 {
  font-size: 20px;
  color: #0d1e18b0;
  font-weight: 500;
}

.author-container {
  display: flex;
  gap: 15px;
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
