import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("redirect test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("redirect content", async () => {
    const page = await createPage("/");
    expect(await page.content()).toContain("");
  });
});
