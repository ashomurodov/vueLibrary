<template>
  <div
    class="flex justify-between items-center lg:px-20 px-10 py-5 bg-emerald-100 z-50 sticky w-full top-0"
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
      <div class="flex gap-2 bg-white p-2 relative rounded-md cursor-pointer mr-4">
        <router-link to="/book/liked">
          <span id="likedNavComp">Yoqtirilgan</span>
        </router-link>
        <img :src="props.likedBooks?.length ? heartTrue : heartFalse" alt="heart" />
      </div>
      <SearchBar :search="props.search" />
      <button id="logOutbtn" @click="logOut">
        <img class="ml-3 cursor-pointer" :src="logout" alt="logout" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { logOut } from "@/utils";
import { SearchBar } from ".";

interface NavProps {
  likedBooks: SingleBook[];
  search: (search: any) => void;
}

const props = defineProps<NavProps>();

import logout from "@/assets/logouticon.png";
import heartTrue from "@/assets/heart-true.png";
import heartFalse from "@/assets/heart-false.png";
import type { SingleBook } from "@/types";
</script>
