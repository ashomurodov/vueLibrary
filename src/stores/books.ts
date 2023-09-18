import { iApi } from "@/service";
import { defineStore } from "pinia";
import { Mapper } from "@/service";
import type { SingleBook } from "@/types";

interface State {
  books: SingleBook[];
  similiarBook: SingleBook[];
  book: SingleBook;
  userToken: boolean;
  loading: boolean;
  search: string | null;
  hasFetchedFirstTime: boolean;
}

export const useBookStore = defineStore("bookStore", {
  state: (): State => ({
    books: [],
    similiarBook: [],
    book: {
      id: "",
      title: "",
      description: "",
      buyLink: "",
      publishDate: "",
      previewLink: "",
      image: "",
      authors: [],
      bookLink: "",
      isLiked: false,
    },
    userToken: true,
    loading: false,
    hasFetchedFirstTime: false,
    search: localStorage.getItem("lastSearch") ? localStorage.getItem("lastSearch") : "programming",
  }),
  actions: {
    async fetchBookListOfBooks() {
      if (this.userToken) {
        try {
          this.loading = true;
          const { data } = await iApi.fetchBooks(this.search!);
          this.books = data.items.map((item) => Mapper.Book(item));
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      } else if (this.userToken === false) {
        throw new Error("Your session expired");
      }
    },

    async fetchSingleBook(id: string) {
      if (this.userToken && this.books.length > 0) {
        const [singleBook] = this.books.filter((book) => book.id === id);
        this.book = singleBook;
      } else if (this.userToken) {
        try {
          this.loading = true;
          const { data } = await iApi.fetchSingleBook(id);
          console.log(data);
          this.book = Mapper.Book(data);
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    },

    async fetchSimiliarBook(title: string) {
      if (this.userToken) {
        try {
          this.loading = true;
          // const {} = {}
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    },
  },
});
