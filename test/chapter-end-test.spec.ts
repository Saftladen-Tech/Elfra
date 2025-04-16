import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("chapter end test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("Static Content", async () => {
    const page = await createPage("/chapter_end");
    expect(await page.content()).toContain("Kapitel abgeschlossen!");
  });

  it("Content position", async () => {
    const page = await createPage("/chapter_end");

    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;

    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 2);
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
      await navigation.getByRole("button", { name: "Weiter", exact: true }).count()
    ).toBe(1);
  });

  it("Has Nav Buttons repeat", async () => {
    const page = await createPage("/chapter_end");
    const navigation = page.getByTestId("navigation");
    expect(
      await navigation.getByRole("button", { name: "Wiederholen", exact: true }).count()
    ).toBe(1);
  });
});
