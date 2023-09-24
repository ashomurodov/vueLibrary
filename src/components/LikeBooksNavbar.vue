<template>
  <div
    class="flex justify-between items-center lg:px-20 px-10 py-5 bg-emerald-100 z-50 sticky w-full top-0"
  >
    <div class="logo">
      <router-link to="/">
        <p class="text-black hidden sm:block lg:text-5xl md:text-3xl text-2xl">
          Back to <span class="text-emerald-600">Menu!</span>
        </p>
        <p class="text-black block sm:hidden text-2xl">
          Ba<span class="text-emerald-600">ck!</span>
        </p>
      </router-link>
    </div>

    <div class="flex justify-center items-center py-3">
      <img
        class="ml-3 cursor-pointer"
        id="logoutimg"
        @click="logOut"
        :src="logOutIcon"
        alt="logout"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { logOut } from "@/utils";
import { SearchBar } from ".";
import logOutIcon from "@/assets/logouticon.png";
</script>
