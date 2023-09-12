import get from "lodash/get";

export const Book = (item) => ({
	id: get(item, "id") || "",
	title: get(item, "volumeInfo.title") || "",
	description: get(item, "volumeInfo.description") || "",
	buyLink: get(item, "volumeInfo.canonicalVolumeLink") || "",
	pageCount: get(item, "volumeInfo.pageCount") || "",
	publishDate: get(item, "volumeInfo.publishedDate") || "",
	language: get(item, "volumeInfo.language") || "",
	previewLink: get(item, "volumeInfo.previewLink") || "",
	image: get(item, "volumeInfo.imageLinks.thumbnail") || "",
	authors: get(item, "volumeInfo.authors") || [],
	bookLink: get(item, "selfLink") || "",
});
