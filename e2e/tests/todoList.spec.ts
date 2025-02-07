import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000'); // Adjust the URL as needed
  await expect(page).toHaveTitle(/Todo List/); // Adjust the expected title
});
