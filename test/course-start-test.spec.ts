import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("course start test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("course start content", async () => {
    const page = await createPage("/course_start");
    expect(await page.content()).toContain("");
  });
});
