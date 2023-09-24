import { mount, shallowMount } from "@vue/test-utils";
import { HomePage } from "@/views";

import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

describe("YourComponent", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Home page render ", async () => {
    const wrapper = shallowMount(HomePage);

    expect(wrapper.exists()).toBe(true);
  });
});
