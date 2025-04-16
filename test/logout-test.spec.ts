import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("logout test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("logout content", async () => {
    const page = await createPage("/logout");
    expect(await page.content()).toContain("Logged out");
    expect(await page.content()).toContain("successfully");
    expect(await page.content()).toContain("redirecting shortly...");
  });

  it("first paragraph text color", async () => {
    const page = await createPage("/logout");
    const paragraph = await page.getByTestId("contentwrapper").getByRole("paragraph").first();
    const color = await paragraph.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    expect(color).toBe("rgb(255, 100, 103)");
  });

  it("content position", async () => {
    const page = await createPage("/logout");
    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1);
  });
});
