<template>
  <div class="border-solid inline-block shadow-lg shadow-gray-400 rounded">
    <div class="book_thumbnail w-full bg-gray-200 p-5 flex justify-center items-center">
      <router-link :to="'/book/' + book?.id">
        <img
          class="max-w-none w-56 h-64 object-cover"
          :src="book?.image"
          :alt="book?.title.substring(0, 4) + '...'"
        />
      </router-link>
    </div>
    <div class="book_description flex flex-col gap-1 mt-3 ml-2 mb-3">
      <span class="book_title text-2xl font-medium"> {{ book?.title }} </span><br />
      <span class="book_authors flex gap-2 text-emerald-200 font-medium italic"
        ><span v-for="author of book?.authors.slice(0, 2)" :key="author">{{ author }}</span></span
      >
      <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type SingleBook } from "../types";

const props = defineProps({
  book: Object as () => SingleBook,
});
</script>
