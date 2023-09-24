import { describe, it, expect, vi, test } from "vitest";
import { mount } from "@vue/test-utils";

import { LikedBookNav } from "@/components";

describe("SearchBar", () => {
  it("render Liked book Navbar", async () => {
    // arrange
    const wrapper = mount(LikedBookNav);

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find(".logo").exists()).toBe(true);
    expect(wrapper.find(".text-emerald-600").text()).toBe("Menu!");

    const logOutbtn = wrapper.find("#logoutimg");

    expect(logOutbtn.exists()).toBe(true);

    await logOutbtn.trigger("click");
  });
});
