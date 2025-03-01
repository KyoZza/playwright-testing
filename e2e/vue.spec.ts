import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('page-title')).toHaveText('Home')
})

test('about link', async ({ page }) => {
  await page.goto('/')

  await page.getByTestId('nav-item-about').click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByTestId('page-title')).toBeVisible()
})
