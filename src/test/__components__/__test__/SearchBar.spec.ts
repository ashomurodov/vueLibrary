import { render, screen } from "@testing-library/vue";
import { describe, it, expect, vi, test } from "vitest";
import { mount } from "@vue/test-utils";

import { SearchBar } from "../../../components";
import { useBookStore } from "@/stores/books";

describe("SearchBar", () => {
  const searchBarText = "Search";

  it("render text correctly", async () => {
    // arrange
    const searchId = "searchbarID";
    render(SearchBar, {
      props: { element: "button", id: searchId },
      slots: { default: searchBarText },
    });

    const search = await screen.findByText(searchBarText);
    expect(search.id).toBe(searchId);
    expect(search.textContent).toBe(searchBarText);
    expect(search.nodeName).toBe("BUTTON");
  });
});
