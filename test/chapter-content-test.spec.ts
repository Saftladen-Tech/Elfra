import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("Chapter-Content test", async () => {
  await setup({
    server: true
    //host: "http://localhost:3000",
  });

  it("Has Chapter Heading", async () => {
    const page = await createPage("/chapter_content");
    expect(await page.getByRole("heading", { level: 1 }).count()).toBe(1);
  });

  it("Has Topic Heading", async () => {
    const page = await createPage("/chapter_content");
    const content = page.getByTestId("content");
    expect(await content.getByRole("heading", { level: 2 }).count()).toBe(1);
  });

  it("Has Nav Buttons next", async () => {
    const page = await createPage("/chapter_content");
    expect(
      await page.getByRole("link", { name: "Weiter", exact: true }).count()
    ).toBe(1);
  });

  it("Has Nav Buttons prev", async () => {
    const page = await createPage("/chapter_content");
    expect(
      await page.getByRole("link", { name: "Zurück", exact: true }).count()
    ).toBe(1);
  });
});
