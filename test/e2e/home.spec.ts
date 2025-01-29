import { test, expect } from "@playwright/test";

test("Home page has a working button", async ({ page }) => {
  // 1. Go to Next.js homepage
  await page.goto("http://localhost:3000");

  // 2. Find button by data-testid
  const button = await page.locator(
    '[data-testid="button"]'
  );

  // 3. Check the button text
  await expect(button).toHaveText("Click Me");

  // // 4. Simulate a click
  // await button.click();
});
