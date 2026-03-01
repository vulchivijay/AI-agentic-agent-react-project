import { test, expect } from "@playwright/test";

test("Navbar links work", async ({ page }) => {
  await page.goto("/");
  await page.click("text=Features");
  await expect(page).toHaveURL(/features/);
});