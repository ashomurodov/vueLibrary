<template>
	<div class="book-container">
		<span class="img"></span>
		<div class="bookDetails">
			<h3>Book Title</h3>
			<p>Book Description</p>
		</div>
	</div>
</template>
<script></script>
<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.book-container {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border: 2px solid #2c3e50;
	width: 700px;
	height: 140px;
	background-color: #f3f3f3;
	padding: 20px;
	font-family: sans-serif;
}

.img {
	width: 100px;
	height: 100%;
	background-color: #17bb7f;
}

h3 {
	font-size: 40px;
}

p {
	font-size: 18px;
	color: rgb(75, 75, 75);
}
</style>
