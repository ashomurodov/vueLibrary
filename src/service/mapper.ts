import get from "lodash/get";

export const Book = (item: any) => ({
  id: get(item, "id") || "",
  title: get(item, "volumeInfo.title") || "",
  description: get(item, "volumeInfo.description") || "",
  buyLink: get(item, "volumeInfo.canonicalVolumeLink") || "",
  publishDate: get(item, "volumeInfo.publishedDate") || "",
  previewLink: get(item, "volumeInfo.previewLink") || "",
  image: get(item, "volumeInfo.imageLinks.thumbnail") || "",
  authors: get(item, "volumeInfo.authors") || [],
  bookLink: get(item, "selfLink") || "",
  isLiked: get(item, "isLiked") || false,
});
