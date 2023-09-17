import type { Api } from "@/types";
import { API_ACCESS_KEY } from "./config";
import http from "./http";

export const fetchBooks = (search = "programming") => {
  return http.get<Api.Book.List.Request, Api.Book.List.Response>(
    `?q=${search}&maxResults=20&key=${API_ACCESS_KEY}`
  );
};

export const fetchSimiliarBooks = (title: string) => {
  return http.get<Api.Book.List.Request, Api.Book.List.Response>(
    `?q=intitle:${title}&maxResults=20&key=${API_ACCESS_KEY}`
  );
};

export const fetchSingleBook = (id: string) =>
  http.get<Api.Book.Single.Request, Api.Book.Single.Response>(`/${id}?key=${API_ACCESS_KEY}`);
