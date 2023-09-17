<template>
  <div
    class="flex bg-emerald-100 bg-['../assets/login-bg.jpg'] justify-center items-center h-screen"
  >
    <div class="paper bg-gray-50 px-5 py-10 md:p-20 rounded-md">
      <h3 class="mb-4 text-xl font-semibold">Login:</h3>
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <label>
          <input
            class="outline-none border-2 p-1 rounded-md"
            placeholder="Write your token"
            type="text"
            v-model="inputValue"
          />
        </label>
        <button class="bg-emerald-600 text-white rounded-md" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { isValidToken, setLocalStore } from "@/utils";
import router from "@/router";

const inputValue = ref("");

const handleSubmit = () => {
  if (isValidToken(inputValue.value.trim())) {
    const userDate = new Date();
    setLocalStore("user_data", { token: inputValue.value.trim(), loginDate: userDate });
    router.push("/");
  }
};
</script>
