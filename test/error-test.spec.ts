import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("Error test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("error content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain("404");
  });
});
