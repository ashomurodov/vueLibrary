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
            :class="!!errors.token ? 'border-red-600' : ''"
            placeholder="Write your token"
            type="text"
            v-bind="token"
            name="token"
          />
        </label>
        <p class="text-red-600 text-sm">{{ errors.token }}</p>
        <button
          class="bg-emerald-600 text-white rounded-md"
          type="submit"
          :disabled="bookStore.loading || !!errors.token"
          :class="
            bookStore.loading
              ? 'cursor-wait bg-gray-200'
              : !!errors.token
              ? 'cursor-not-allowed bg-gray-200'
              : ''
          "
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { isValidToken, setLocalStore, timer } from "@/utils";
import { useBookStore } from "../stores/books";
import router from "@/router";

import { useForm } from "vee-validate";
import * as yup from "yup";

const { errors, submitForm, defineInputBinds } = useForm({
  validationSchema: yup.object({
    token: yup
      .string()
      .matches(/^[a-zA-Z]{16}$/, "Token must be 16 letters")
      .required(),
  }),
});

const token = defineInputBinds("token");

const handleSubmit = async () => {
  try {
    await submitForm();
    bookStore.loading = true;
    await timer(2000);
    const userDate = new Date();
    if (isValidToken(token.value.value)) {
      setLocalStore("user_data", { token: token.value.value, loginDate: userDate });
      router.push("/");
    }
    bookStore.loading = false;
  } catch (error) {
    console.error("Form validation failed:", error);
  }
};

const bookStore = useBookStore();
</script>
