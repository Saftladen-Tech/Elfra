import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("footer content", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("footer content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain("ELFRA Framework – ");
  });
  it("footer content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain("Github");
  });
  it("footer content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain(" – MIT Licensed");
  });
});
