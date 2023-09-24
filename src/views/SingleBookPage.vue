<template>
  <LikedBookNav />
  <div class="loader" :class="bookStore.loading ? 'block' : 'hidden'">
    <Loader />
  </div>
  <div :class="bookStore.loading ? 'hidden' : 'block'" class="container-px-20 px-8 lg:px-20">
    <div class="flex flex-col items-center gap-x-20 sm:flex-row sm:px-10 sm:justify-between py-8">
      <div class="w-60 lg:w-3/12 flex flex-col items-center gap-2">
        <div class="img_cover w-72 h-80 flex rounded-lg justify-center items-center bg-emerald-100">
          <img class="w-54 h-72 object-cover rounded-lg" :src="bookStore.book.image" alt="book" />
        </div>
        <span class="text-xl w-full font-semibold text-emerald-800 italic"
          >{{ bookStore?.book?.title }}
        </span>
      </div>
      <div class="lg:w-3/4 italic mt-3">
        <div class="book_details">
          <p>
            <router-link to="/book/liked" :class="bookStore.book.isLiked ? 'block' : 'hidden'">
              <button
                class="italic cursor-pointer text-emerald-700 bg-emerald-50 font-bold py-1 px-6 rounded-md mb-3 ring-emerald-700 ring-offset-2 ring-2"
              >
                Liked ✔️
              </button>
            </router-link>
            <br />
            <span class="text-emerald-950 font-bold text-xl mr-3">Authors: </span>
            <span
              class="mr-3"
              v-for="author of bookStore.book.authors"
              :key="author + Date.now()"
              >{{ author }}</span
            >
          </p>
          <p><span class="text-emerald-950 font-bold text-xl mr-3">Stars: </span>⭐⭐⭐⭐⭐</p>
          <div class="buttons flex items-center gap-5 py-7">
            <a :href="bookStore.book.buyLink">
              <button class="bg-emerald-500 rounded-lg w-20 sm:w-32 md:w-36 py-2 px-3 text-white">
                Buy!
              </button>
            </a>
            <a :href="bookStore.book.previewLink">
              <button
                class="bg-white border-emerald-500 border-2 rounded-lg w-20 sm:w-32 md:w-36 py-2 px-3 text-emerald-500"
              >
                Preview
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="description italic">
      <p v-html="bookStore.book.description"></p>
    </div>
    <h5 class="mt-6 text-3xl font-semibold text-emerald-900">Maybe you like it:</h5>
  </div>
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
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import { LikedBookNav, Loader, bookItem } from "@/components";
import { useBookStore } from "../stores/books";

const router = useRoute();
const bookStore = useBookStore();

console.log(bookStore.book);

const watchRouteParams = () => {
  watch(
    () => router.params.id,
    (newId, oldId) => {
      if (newId !== oldId) {
        router.params.id = newId;
        bookStore.fetchSingleBook(String(router.params.id));
        window.scrollTo({ top: 0 });
        console.log("Hello");
      }
    }
  );
};

watchRouteParams();

onMounted(() => {
  window.scrollTo({ top: 0 });
  bookStore.fetchSingleBook(String(router.params.id));
});
</script>
