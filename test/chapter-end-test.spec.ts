import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("chapter end test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("chapter end content", async () => {
    const page = await createPage("/chapter_end");
    expect(await page.content()).toContain("");
  });
});
