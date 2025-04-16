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
