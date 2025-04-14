import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("logout test", async () => {
  await setup({
    host: "http://localhost:3000",
  });

  it("logout content", async () => {
    const page = await createPage("/logout");
    expect(await page.content()).toContain("");
  });
});
