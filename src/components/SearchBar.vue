<template>
  <div>
    <form @submit.prevent="handleSubmit" class="flex gap-3 items-center">
      <input
        class="outline-none border-2 rounded-lg w-28 sm:w-52 md:w-72 py-2 px-3 border-emerald-500"
        type="text"
        placeholder="Search.."
        v-model="search"
      />
      <button class="bg-emerald-500 rounded-lg w-16 sm:w-24 md:w-30 py-2 md:px-3 px-1 text-white">
        Search
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import { useBookStore } from "@/stores/books";

const bookStore = useBookStore();
const search = ref("");

const handleSubmit = () => {
  if (search.value.trim().length > 0) {
    localStorage.setItem("lastSearch", search.value);
    router.push("/");

    bookStore.search = search.value;
    bookStore.fetchBookListOfBooks();

    search.value = "";
  }
};
</script>
