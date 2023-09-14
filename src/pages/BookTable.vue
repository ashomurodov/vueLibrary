<template>
  <NavbarEl :handleSubmit="searchBooks" />

  <h1>I'm BookTable</h1>
  <template v-if="loader">
    <div class="loader"><LoaderComponent :loading="loader" /></div>
  </template>
  <template v-else-if="!loader && bookList">
    <div class="bookMenu">
      <BookItem v-for="(book, index) of bookList" :key="index" :book="bookMapper.Book(book)" />
    </div>
  </template>
  <template v-else>
    <div class="notFound">
      <h1>Not Found</h1>
    </div>
  </template>
</template>

<script setup lang="ts">
import axios from "axios";
import http from "@/http";

import { ref, onMounted } from "vue";
import { bookMapper } from "@/mappers";
import { BookItem, LoaderComponent, NavbarEl } from "@/components";

const bookList = ref([]);
const loader = ref(true);

const prevSearch = ref<String | null>("");

prevSearch.value = localStorage.getItem("lastSearch") ? localStorage.getItem("lastSearch") : "";

const searchBooks = async (search: string) => {
  if (!search) search = prevSearch.value ? String(prevSearch.value) : "programming";

  localStorage.setItem("lastSearch", search);

  prevSearch.value = search;
  loader.value = true;
  try {
    const { data } = await http.get(
      "?maxResults=30&q=" + prevSearch.value + "&key=AIzaSyBIse3aE94iDf4rmBaJwaA_XQzjLi2NQSI"
    );
    bookList.value = data.items;
    loader.value = false;
  } catch (error) {
    console.log(error);
    loader.value = false;
  }
};

onMounted(() => {
  searchBooks("");
});
</script>

<style>
.bookMenu {
  padding: 10px 100px;
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto auto auto;
  gap: 20px;
  margin-top: 80px;
}

.notFound {
  display: grid;
  place-items: center;
  height: 80vh;
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
