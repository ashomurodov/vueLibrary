import { iApi } from "@/service";
import { defineStore } from "pinia";
import { Mapper } from "@/service";
import type { SingleBook } from "@/types";
import { isTokenExpired } from "@/utils";
import router from "@/router";

interface State {
  books: SingleBook[];
  likedBooks: SingleBook[];
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
    likedBooks: [],
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
          console.log(data);
          this.books = data?.items?.map((item) => Mapper.Book(item));
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

    addLikedBooks(id: string) {
      if (!isTokenExpired()) {
        const [likedBook] = this.books.filter((book) => book.id === id);
        if (likedBook.isLiked) {
          likedBook.isLiked = false;
          this.likedBooks = this.books.filter((book) => book.isLiked);
        } else {
          likedBook.isLiked = true;
          this.likedBooks = this.books.filter((book) => book.isLiked);
        }
      } else {
        alert("Your token expired pls resignIn");
        router.push("/login");
      }

      console.log(this.likedBooks);
    },
  },
});
