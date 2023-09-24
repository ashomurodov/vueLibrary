<template>
  <div>
    <form @submit.prevent="() => props.search(searchV)" class="flex gap-3 items-center">
      <input
        class="outline-none border-2 rounded-lg w-28 sm:w-52 md:w-72 py-2 px-3 border-emerald-500"
        type="text"
        placeholder="Search.."
        v-model="searchV"
      />
      <button
        id="searchbarID"
        class="bg-emerald-500 rounded-lg w-16 sm:w-24 md:w-30 py-2 md:px-3 px-1 text-white"
      >Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchV = ref("");

interface SearchProps {
  search: (search: any) => void;
}

const props = defineProps<SearchProps>();
</script>
