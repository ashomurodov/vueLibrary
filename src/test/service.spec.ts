import axios, { isAxiosError } from "axios";
import { test, describe, expect } from "vitest";
import { iApi } from "@/service";
import type { Api } from "@/types";

describe("Test fetch API", () => {
  test("GET list of books", async () => {
    const response: Api.Book.List.Response = {
      status: 0,
      data: {
        items: [],
      },
    };

    try {
      const data = await iApi.fetchBooks("programming");
      response.status = data.status;
      response.data.items = data.data.items;
    } catch (error: any) {
      if (isAxiosError(error)) {
        response.status = error.response?.status || 403;
      }
    }

    expect(response.status).toEqual(200);
    expect(response.data.items).toBeTruthy();
  });

  test("GET single book", async () => {
    const response: Api.Book.Single.Response = {
      data: [],
      status: 0,
    };

    try {
      const data = await iApi.fetchSingleBook("2YQlDwAAQBAJ");
      response.status = data.status;
      response.data = data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        response.status = error.response?.status || 403;
      }
    }

    expect(response.status).toEqual(200);
    expect(response.data).toBeTruthy();
  });

  test("GET similiar books", async () => {
    const response: Api.Book.List.Response = {
      data: {
        items: [],
      },
      status: 0,
    };

    try {
      const data = await iApi.fetchSimiliarBooks("programming");
      response.status = data.status;
      response.data.items = data.data.items;
    } catch (error) {
      if (isAxiosError(error)) {
        response.status = error.response?.status || 403;
      }
    }

    expect(response.status).toEqual(200);
    expect(response.data.items).toBeTruthy();
  });

  //   test("Get single book", async () => {
  //     let response = {} as { status: number };

  //     try {
  //       // const data = await axios.get<Api.Book.Single.Respons>(
  //       //   `https://www.googleapis.com/books/v1/volumes/2kLADwAAQBAJ`
  //       // );
  //       const data = await HomeService.GetBook("pXDzdJ_1E3oC");
  //       response.status = data.status;
  //     } catch (e: any) {
  //       if (isAxiosError(e)) {
  //         response.status = e.response?.status || 500;
  //         console.log(e.message);
  //       }
  //     }
  //     expect(response.status).toBe(200);
  //   });

  //   test("Get similar books ", async () => {
  //     let response = {} as { status: number };

  //     try {
  //       // const data = await axios.get<Api.Book.Single.Respons>(
  //       //   `https://www.googleapis.com/books/v1/volumes?q=programming`
  //       // );
  //       const data = await HomeService.GetSimilarBooks("programming");
  //       response.status = data.status;
  //     } catch (e: any) {
  //       if (isAxiosError(e)) {
  //         response.status = e.response?.status || 500;
  //         console.log(e.message);
  //       }
  //     }
  //     expect(response.status).toBe(200);
  //   });
});
