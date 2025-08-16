import { test, expect } from '@playwright/test';

test('playing with assertions', async ({ page }) => {
    await page.goto('http://www.uitestingplayground.com/textinput');

    await expect(page.locator('#newButtonName')).toBeVisible();

    await page.locator('#newButtonName').fill('Julian');

    await page.locator('#updatingButton').click();

    await expect(page.locator('#newButtonName')).toHaveValue('Julian');
});