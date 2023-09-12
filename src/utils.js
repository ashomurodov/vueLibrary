export const extractBookIdFromUrl = (url) => {
	const parts = url.split("/");

	const bookId = parts[parts.length - 1];

	return bookId;
};

export const formatDate = (inputDate) => {
	const date = new Date(inputDate);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();

	return `${day}.${month}.${year}`;
};

export const isValidToken = (token) => {
	const pattern = /^[a-zA-Z]{16}$/;

	return pattern.test(token);
};

export const timer = async (time) => {
	await new Promise((res) =>
		setTimeout(() => {
			res("something is happening");
		}, time)
	);
};
