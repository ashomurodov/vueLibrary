<template>
  <div
    class="flex justify-between items-center lg:px-20 px-10 py-5 bg-emerald-100 sticky w-full top-0"
  >
    <div class="logo">
      <router-link to="/">
        <p class="text-black hidden sm:block lg:text-5xl md:text-3xl text-2xl">
          Read<span class="text-emerald-600">Zen!</span>
        </p>
        <p class="text-black block sm:hidden text-2xl">R<span class="text-emerald-600">Z!</span></p>
      </router-link>
    </div>
    <div class="flex justify-center items-center py-3">
      <SearchBar />
      <img class="ml-3 cursor-pointer" @click="handleSubmit" :src="logout" alt="logout" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchBar } from ".";
import logout from "@/assets/logouticon.png";
import router from "@/router";

const handleSubmit = () => {
  const isConfirmed = confirm("Tizimdan chiqishga rozimisiz?");
  if (isConfirmed) {
    localStorage.removeItem("user_data");
    router.push("/login");
  }
};
</script>
