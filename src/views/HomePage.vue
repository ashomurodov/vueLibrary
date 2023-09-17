<template>
  <Navbar />
  <div class="w-full lg:px-20 px-10 my-8">
    <div class="loader" :class="bookStore.loading ? 'block' : 'hidden'">
      <Loader />
    </div>
    <div :class="bookStore.loading ? 'hidden' : ''" class="books_container books_grid">
      <bookItem v-for="book in bookStore.books" :key="book.id" :book="book" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { Navbar, bookItem, Loader } from "@/components";
import { useBookStore } from "../stores/books";

const bookStore = useBookStore();

onMounted(() => {
  if (bookStore.hasFetchedFirstTime === false) {
    bookStore.fetchBookListOfBooks();
    bookStore.hasFetchedFirstTime = true;
  }
});
</script>

<style>
.loader {
  height: 80vh;
}
</style>
