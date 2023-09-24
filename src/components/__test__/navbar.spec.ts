import { describe, it, expect, vi, test, beforeEach, afterEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { mount } from "@vue/test-utils";

import { Navbar } from "..";

describe("navbar", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("render text correctly", () => {
    const wrapper = mount(Navbar);

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find("#likedNavComp").exists()).toBe(true);
    expect(wrapper.find("#likedNavComp").text()).toBe("Yoqtirilgan");
  });

  it("button login is working", async () => {
    const wrapper = mount(Navbar);
    expect(wrapper.find("#logOutbtn").exists()).toBe(true);
    await wrapper.find("#logOutbtn").trigger("click");
  });
});
