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
});
