import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("chapter end test", async () => {
  await setup({
    server: true
    //host: "http://localhost:3000",
  });

  it("Static Content", async () => {
    const page = await createPage("/chapter_end");
    expect(await page.content()).toContain("Kapitel abgeschlossen!");
  });

  it("Has ICON", async () => {
    const page = await createPage("/chapter_end");
    const content = page.getByTestId("icon");
    expect(await content.count()).toBe(1);
  });


  it("Has Nav Buttons next", async () => {
    const page = await createPage("/chapter_end");
    const navigation = page.getByTestId("navigation");
    expect(
      await navigation.getByRole("link", { name: "Weiter", exact: true }).count()
    ).toBe(1);
  });

  it("Has Nav Buttons repeat", async () => {
    const page = await createPage("/chapter_end");
    const navigation = page.getByTestId("navigation");
    expect(
      await navigation.getByRole("link", { name: "Wiederholen", exact: true }).count()
    ).toBe(1);
  });
});
