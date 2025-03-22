import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("header content", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("header content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain("Home");
  });
  it("header content", async () => {
    const page = await createPage("/test");
    expect(await page.content()).toContain("About");
  });
  it("header logo", async () => {
    const page = await createPage("/test");
    expect(await page.toMatchFileSnapshot('./public/images/logo.jpg')); ;
  })
});
