<template>
	<div class="container">
		<div class="logo">
			<p>Read<span class="logo_green">Zen!</span></p>
		</div>
		<div class="searchComponent">
			<form @submit.prevent="() => handleSubmit(inputValue)">
				<input v-model="inputValue" type="text" placeholder="Search and press enter..." />
			</form>
		</div>
		<div class="user">
			<div class="user_profile">
				<p>Ayyub</p>
				<span class="userNameFirstCase">A</span>
			</div>
			<template v-if="isRegistered">
				<div>
					<button class="logout btn">Log Out</button>
				</div>
			</template>
			<template v-else>
				<div>
					<button class="login btn">
						<router-link to="/login" style="color: #000; text-decoration: none">Login</router-link>
					</button>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const inputValue = ref("");
const isRegistered = ref(false);

const token = localStorage.getItem("token");

isRegistered.value = !!token;

console.log(token);

const props = defineProps({
	handleSubmit: Function,
});

console.log(props);
</script>
<style scoped>
.container {
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 50px;
	box-shadow: 2px 4px 22px 0px rgba(0, 0, 0, 0.12);
	position: fixed;
	top: 0;
	background-color: #fff;
}

input {
	border-radius: 20px;
	border: 2px solid #17171739;
	padding: 10px 35px 10px 10px;
	width: 300px;
	outline: none;
	-webkit-box-shadow: inset 2px 4px 22px 0px rgba(0, 0, 0, 0.12);
	-moz-box-shadow: inset 2px 4px 22px 0px rgba(0, 0, 0, 0.12);
	box-shadow: inset 2px 4px 22px 0px rgba(0, 0, 0, 0.12);
}

.logo p {
	color: #171717;
	font-size: 35px;
}

.logo .logo_green {
	color: #17bb7f;
}

.userNameFirstCase {
	width: 50px;
	height: 50px;
	background-color: #f3f3f3;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
}

.user_profile {
	display: flex;
	gap: 10px;
	align-items: center;
}

.btn {
	padding: 10px 18px;
	border: 2px solid #010101;
	color: #000;
	border-radius: 5px;
	cursor: pointer;
	font-size: 20px;
}
</style>
