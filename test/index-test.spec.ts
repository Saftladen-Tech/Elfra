import { describe, it, expect, test, inject } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("index test", async () => {
  await setup({
    host: inject('testURL'),
  });

  it("index content", async () => {
    const page = await createPage("/");
    const content = await page.getByTestId("contentwrapper");

    expect(await content.getByRole("heading", {level: 1}).count()).toBe(1);
    expect(await content.getByRole("paragraph").count()).toBe(1);
    expect(await content.getByRole("heading", {level: 2}).count()).toBe(1);
  });

  it("Table position", async () => {
    const page = await createPage("/");
    const content = await page.getByTestId("contentwrapper");

    const cT = await content.getByTestId("courseTable");
    const cTbox = await cT.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = cTbox.x + cTbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1);
  });
});
