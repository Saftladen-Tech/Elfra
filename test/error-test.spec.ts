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

  it("error position", async () => {
    const page = await createPage("/test");

    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;

    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1);
  });
});
