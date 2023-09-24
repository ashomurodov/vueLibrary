<template>
  <Navbar :search="handleSubmit" :likedBooks="bookStore.likedBooks" />
  <div class="w-full lg:px-20 px-10 my-8">
    <div class="loader" :class="bookStore.loading ? 'block' : 'hidden'">
      <Loader />
    </div>
    <div :class="bookStore.loading ? 'hidden' : ''" class="books_container books_grid">
      <template v-if="bookStore?.books?.length > 0">
        <bookItem class="book-item" v-for="book in bookStore.books" :key="book.id" :book="book" />
      </template>
      <template v-else>
        <span class="h-4/5 w-screen grid place-items-center pt-5">
          <p class="text-xl lg:text-3xl text-center text-gray-500">
            Not Found :( <br />
            Please search another book...
          </p>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { Navbar, bookItem, Loader } from "@/components";
import { useBookStore } from "../stores/books";

import router from "@/router";

const bookStore = useBookStore();

const handleSubmit = (search: any) => {
  if (search.trim().length > 0) {
    const bookStore = useBookStore();
    localStorage.setItem("lastSearch", search);
    router.push("/");

    bookStore.search = search;
    bookStore.fetchBookListOfBooks();

    search = "";
  }
};

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
