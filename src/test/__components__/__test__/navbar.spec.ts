import { describe, it, expect, vi, test, beforeEach, afterEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";

import { Navbar } from "@/components";

describe("navbar", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("render text correctly", () => {
    const wrapper = mount(Navbar, {
      props: {
        likedBooks: [
          {
            authors: ["", ""],
            bookLink: "",
            buyLink: "",
            description: "",
            id: "222",
            image: "",
            isLiked: false,
            previewLink: "",
            publishDate: "",
            title: "",
          },
          {
            authors: ["", ""],
            bookLink: "",
            buyLink: "",
            description: "",
            id: "222",
            image: "",
            isLiked: false,
            previewLink: "",
            publishDate: "",
            title: "",
          },
        ],
        search: () => {},
      },
    });

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find("#likedNavComp").exists()).toBe(true);
    expect(wrapper.find("#likedNavComp").text()).toBe("Yoqtirilgan");
  });

  it("heart image will be true", () => {
    const wrapper = mount(Navbar, {
      props: {
        likedBooks: [
          {
            authors: ["", ""],
            bookLink: "",
            buyLink: "",
            description: "",
            id: "222",
            image: "",
            isLiked: false,
            previewLink: "",
            publishDate: "",
            title: "",
          },
          {
            authors: ["", ""],
            bookLink: "",
            buyLink: "",
            description: "",
            id: "222",
            image: "",
            isLiked: false,
            previewLink: "",
            publishDate: "",
            title: "",
          },
        ],
        search: () => {},
      },
    });

    const heartImageIsTrue = wrapper.find(".heart_is_true");
    expect(heartImageIsTrue.exists()).toBe(true);
  });

  it("heart image will be falsy", () => {
    const wrapper = mount(Navbar, {
      props: {
        likedBooks: [],
        search: () => {},
      },
    });

    const heartImageIsTrue = wrapper.find(".heart_is_true");
    const heartImageIsFalse = wrapper.find(".heart_is_false");
    expect(heartImageIsTrue.exists()).toBe(false);
    expect(heartImageIsFalse.exists()).toBe(true);
  });
});
