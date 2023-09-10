<template>
	<SearchInput />
	<BookTable />
</template>

<script setup>
import BookTable from "./pages/BookTable.vue";
import SearchInput from "./components/SearchInput.vue";
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
