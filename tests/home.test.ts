import { mount, VueWrapper } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";
import { createTestingPinia } from "@pinia/testing";
import { vi, describe, beforeEach, test, expect } from "vitest";

describe("HelloWorld", () => {
  let app: VueWrapper<any>;

  beforeEach(function () {
    app = mount(HelloWorld, {
      plugins: [createTestingPinia({ createSpy: vi.fn })],
    });
  });

  test("Mount component", async () => {
    expect(HelloWorld).toBeTruthy();
    const message = "test";

    const wrapper = mount(HelloWorld, {
      props: {
        msg: message,
      },
    });

    expect(wrapper.text()).toContain(message);
  });
});
