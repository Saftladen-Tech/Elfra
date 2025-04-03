import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("footer content", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("footer content", async () => {
    const page = await createPage("/");
    expect(await page.getByTestId("footer").innerHTML()).toContain(
      "ELFRA Framework – "
    );
  });
  it("footer content", async () => {
    const page = await createPage("/");
    expect(await page.getByTestId("footer").innerHTML()).toContain("Github");
  });
  it("footer content", async () => {
    const page = await createPage("/");
    expect(await page.getByTestId("footer").innerHTML()).toContain(
      " – MIT Licensed"
    );
  });

  it("footer position", async () => {
    const page = await createPage("/");

    const footer = await page.getByTestId("footer"); // Adjust selector if needed
    const footerBox = await footer.boundingBox();

    const vph = await page.evaluate(() => window.innerHeight);
    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = footerBox.x + footerBox.width / 2;
    const vpxc = vpw / 2;

    expect(footerBox.y + footerBox.height).toBeCloseTo(vph, 2); // Allow slight margin
    expect(elementCenterX).toBeCloseTo(vpxc, 2); // Allow slight margin
  });
});
