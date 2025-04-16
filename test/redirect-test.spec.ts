import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("redirect test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("redirect content", async () => {
    const page = await createPage("/redirect");
    expect(await page.content()).toContain("Authentification");
    expect(await page.content()).toContain("required!");
    expect(await page.content()).toContain("redirecting...");
  });

  it("first paragraph text color", async () => {
    const page = await createPage("/redirect");
    const paragraph = await page.getByTestId("contentwrapper").getByRole("paragraph").first();
    const color = await paragraph.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    expect(color).toBe("rgb(252, 200, 0)"); // Orange in RGB
  });
  
  it("content position", async () => {
    const page = await createPage("/redirect");
    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1);
  });
});
