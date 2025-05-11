import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("course end test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("static content", async () => {
    const page = await createPage("/course_end");
    const content = await page.getByTestId("contentwrapper");
    const heading = await content.getByRole("heading", { level: 1 });
    expect(await heading.allInnerTexts()).toContain("Kurs beendet!");
    expect(await page.content()).toContain(
      "Herzlichen glückwunsch! Du kannst den Kurs nun erneut durcharbeiten oder Abschließen!"
    );
  });

  it("Content position", async () => {
    const page = await createPage("/course_end");

    const content = await page.getByTestId("contentwrapper"); // Adjust selector if needed
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;

    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1); // Allow slight margin
  });

  it("Has ICON", async () => {
    const page = await createPage("/course_end");
    const content = page.getByTestId("icon");
    expect(await content.count()).toBe(1);
  });

  it("Has Nav Buttons end", async () => {
    const page = await createPage("/course_end");
    const navigation = page.getByTestId("navigation");
    expect(
      await navigation
        .getByRole("button", { name: "Beenden", exact: true })
        .count()
    ).toBe(1);
  });

  it("Has Nav Buttons repeat", async () => {
    const page = await createPage("/course_end");
    const navigation = page.getByTestId("navigation");
    expect(
      await navigation
        .getByRole("button", { name: "Neustarten", exact: true })
        .count()
    ).toBe(1);
  });
});
