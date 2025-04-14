import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("course end test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("course end content", async () => {
    const page = await createPage("/course_end");
    expect(await page.content()).toContain("");
  });
});
