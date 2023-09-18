<template>
  <LikedBookNav />
  <div class="w-full lg:px-20 px-10 my-8">
    <div :class="bookStore.loading ? 'hidden' : ''" class="books_container books_grid">
      <template v-if="bookStore?.likedBooks?.length > 0">
        <bookItem v-for="book in bookStore.likedBooks" :key="book.id" :book="book" />
      </template>
      <template v-else>
        <span class="h-4/5 w-screen grid place-items-center pt-5">
          <p class="text-xl lg:text-3xl text-center text-gray-500">
            You have not <br />
            Liked Books.. (
          </p>
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LikedBookNav, bookItem } from "@/components";
import { useBookStore } from "@/stores/books";

const bookStore = useBookStore();
</script>
