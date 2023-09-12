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
