import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("course start test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("course start content", async () => {
    const page = await createPage("/course_start");
    const content = await page.getByTestId("contentwrapper");
    expect(await content.getByRole("heading", { level: 1 }).count()).toBe(1);
  });

  it("Content position", async () => {
    const page = await createPage("/course_start");

    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;

    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1); // Allow slight margin
  });

  it("Start button", async () => {
    const page = await createPage("/course_start");
    const content = await page.getByTestId("contentwrapper");

    expect(
      await content.getByRole("link", { name: "Start", exact: true }).count()
    ).toBe(1);
  });

  it("Start button position", async () => {
    const page = await createPage("/course_start");
    const content = await page.getByTestId("contentwrapper");

    const start = await content.getByRole("link", {
      name: "Start",
      exact: true,
    });
    const startbox = await start.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = startbox.x + startbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1); // Allow slight margin
  });
});
