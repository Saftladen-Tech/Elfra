import { describe, it, expect, test } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

describe("header content", async () => {
  await setup({
    host: "http://localhost:3000",
  });

});
