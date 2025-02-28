import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('You did it!')
})

test('about link', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('nav-item-about').click()
  await expect(page.getByTestId('page-title')).toBeVisible()
})
