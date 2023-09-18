<template>
  <div class="border-solid inline-block shadow-lg shadow-gray-400 rounded-lg">
    <div
      class="book_thumbnail relative w-full bg-gray-200 p-5 flex justify-center rounded-lg items-center"
    >
      <router-link class="absolute w-full h-full" :to="'/book/' + book?.id">
        <div
          class="p-5 w-full absolute bg-gray-800 bg-opacity-0 hover:bg-opacity-20 cursor-pointer rounded-lg h-full"
        ></div>
      </router-link>

      <img
        class="max-w-none w-56 h-64 object-cover"
        :src="book?.image"
        :alt="book?.title.substring(0, 4) + '...'"
      />
    </div>
    <div class="book_description flex flex-col gap-1 mt-3 ml-2 mb-3 mr-2">
      <span class="book_title text-2xl font-medium"> {{ book?.title.substring(0, 20) }}... </span
      ><br />
      <span class="book_authors flex gap-2 text-emerald-200 font-medium italic"
        ><span v-for="author of book?.authors.slice(0, 2)" :key="author">{{ author }}</span></span
      >

      <div class="flex justify-between items-center">
        <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <img
          :src="book?.isLiked ? heartTrue : heartFalse"
          class="cursor-pointer"
          @click="() => console.log('clickedlike')"
          alt="heart"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { type SingleBook } from "../types";

import heartTrue from "@/assets/heart-true.png";
import heartFalse from "@/assets/heart-false.png";

const props = defineProps({
  book: Object as () => SingleBook,
});
</script>
