<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <span>Login</span>
      <input v-model="userToken" type="text" name="token" placeholder="Token" required />
      <button :disabled="loader">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { isValidToken, timer } from "@/utils";
import { ref } from "vue";
import router from "@/router/index.js";

const username = ref("");
const userToken = ref("");
const loader = ref(false);

const handleSubmit = async () => {
  loader.value = true;

  try {
    if (isValidToken(userToken.value)) {
      await timer(3000);

      loader.value = false;
      localStorage.setItem("token", userToken.value);
      alert(`You are login successfully!`);
      router.push("/");
    } else {
      await timer(3000);

      loader.value = false;
      alert("Token incorrect, Please write 16 characters contains uppercase and lowercase");
      throw new Error("token is incorrect");
    }
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #eaeaea;
}

.login form {
  display: flex;
  flex-direction: column;
  gap: 35px;
  background-color: #fff;
  padding: 100px 80px;
}

.login form input {
  width: 300px;
  height: 40px;
  outline: none;
  padding: 0px 20px;
  border: 2px solid #c8deea;
  border-radius: 5px;
}

button {
  height: 30px;
  cursor: pointer;
  background-color: #2fb773;
  border: none;
  color: #fff;
  border-radius: 5px;
}

button:disabled {
  background-color: #7d7d7d;
  cursor: wait;
}

.login form span {
  text-align: start;
  font-size: 40px;
}
</style>
