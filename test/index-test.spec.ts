import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("index test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("index content", async () => {
    const page = await createPage("/");
    expect(await page.content()).toContain("");
  });
});
