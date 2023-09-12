<template>
	<div v-if="loading" class="loader">
		<div class="spinner"></div>
	</div>
</template>

<script>
export default {
	props: {
		loading: Boolean,
	},
};
</script>

<style scoped>
.loader {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}

.spinner {
	border: 4px solid rgba(10, 40, 31, 0.3);
	border-top: 4px solid #17bb7f;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
