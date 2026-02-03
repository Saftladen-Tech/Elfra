import { describe, it, expect, test, inject } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils/e2e";

const customConfig = inject('customConfig')

let cDescribe = describe

if(!customConfig.auth.enabled){
  cDescribe = describe.skip
}

cDescribe("login test", async () => {
  await setup({
    host: inject('testURL'),
  });

  it("static content", async () => {
    const page = await createPage("/login");
    const content = await page.getByTestId("contentwrapper");

    expect(await page.content()).toContain("Login");
    expect(await content.getByRole("heading", {level: 3}).count()).toBe(1);
    expect(await content.getByRole("textbox", {name:"Email"}).count()).toBe(1);
    expect(await content.getByRole("textbox", {name:"Password"}).count()).toBe(1);
    expect(await content.getByTestId("authProviders").count()).toBe(1);
  });

  it("dynamic content", async () => {
    const page = await createPage("/login");
    const content = await page.getByTestId("contentwrapper");
    const mail = await content.getByRole("textbox", {name:"Email"});
    const pw = await content.getByRole("textbox", {name:"Password"});

    expect(await content.getByRole("button", {name:"submit"}).count()).toBe(0);
    await mail.fill("test")
    await pw.fill("test")
    expect(await content.getByRole("button", {name:"submit"}).count()).toBe(1);
  });

  it("content position", async () => {
    const page = await createPage("/login");
    const content = await page.getByTestId("contentwrapper");
    const contentbox = await content.boundingBox();

    const vpw = await page.evaluate(() => window.innerWidth);

    const elementCenterX = contentbox.x + contentbox.width / 2;
    const vpxc = vpw / 2;

    expect(elementCenterX).toBeCloseTo(vpxc, 1);
  });
});
