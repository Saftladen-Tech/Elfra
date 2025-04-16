import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("header content", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("static nav content", async () => {
    const page = await createPage("/");
    const baseheader = await page.getByTestId("header")

    expect(await baseheader.getByAltText("Company Logo").count()).toBe(1);
    // NOT CLEANLY DONE IN CODE - REVISIT expect(await baseheader.getByTestId("avatar").count()).toBe(1); 
    expect(await baseheader.getByRole("navigation").count()).toBe(1);
    expect(await baseheader.getByTestId("colormode").count()).toBe(1);
  });

  it("nav header position", async () => {
    const page = await createPage("/");

    const baseheader = await page.getByTestId("header");
    const baseheaderbox = await baseheader.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = baseheaderbox.x + baseheaderbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1); // Allow slight margin
  });

  it("static hero content", async () => {
    const page = await createPage("/login");
    const heroheader = await page.getByTestId("header")

    expect(await heroheader.getByAltText("Company Logo").count()).toBe(1);
    expect(await heroheader.getByRole("heading", {level: 1}).count()).toBe(1);
  });

  it("hero header position", async () => {
    const page = await createPage("/login");

    const heroheader = await page.getByTestId("header");
    const heroheaderbox = await heroheader.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = heroheaderbox.x + heroheaderbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1); // Allow slight margin
  });
});
