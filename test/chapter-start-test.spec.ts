import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("chapter start test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("Content Base", async () => {
    const page = await createPage("/chapter_start");
    const content = await page.getByTestId("contentwrapper");
    expect(await content.getByRole("heading", {level: 1}).count()).toBe(1);
    expect(await content.getByRole("paragraph").count()).toBe(1);
  });

  it("Content position", async () => {
    const page = await createPage("/chapter_start");

    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;

    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 2); // Allow slight margin
  });

  it("Start button", async () => {
    const page = await createPage("/chapter_start");
    expect(await page.getByTestId("startbtn").count()).toBe(1);
  });

  it("Start button position", async () => {
    const page = await createPage("/chapter_start");

    const start = await page.getByTestId("startbtn"); // Adjust selector if needed
    const startbox = await start.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = startbox.x + startbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 2); // Allow slight margin
  });
});
