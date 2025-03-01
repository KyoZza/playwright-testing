import { test, expect } from '@playwright/test'

test('greets the user after entering a name (click submit)', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('form-input-name').fill('John Doe')
  await page.getByTestId('form-submit').click()

  await expect(page.getByTestId('greeting-text')).toContainText('John Doe')

  ///await page.getByTestId('form-input-name').press('Enter');
})

test('greets the user after entering a name (press enter)', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId('form-input-name').fill('John Doe')
  await page.getByTestId('form-input-name').press('Enter')

  await expect(page.getByTestId('greeting-text')).toContainText('John Doe')
})
