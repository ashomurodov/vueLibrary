import { describe, expect, beforeEach, test } from "vitest";
import { bookItem } from "..";

import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";

describe("book item", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("render", () => {
    const wrapper = mount(bookItem);

    expect(wrapper.exists()).toBe(true);
  });
});
