import { test, expect } from '@playwright/test'

test('form validation and greeting update', async ({ page }) => {
  await page.goto('/')

  const input = page.getByTestId('form-input-name')
  const submitButton = page.getByTestId('form-submit')
  const greetingText = page.getByTestId('greeting-text')

  // Ensure the button is disabled initially
  await expect(submitButton).toBeDisabled()
  await input.fill('Alice')
  await expect(submitButton).toBeEnabled()
  await submitButton.click()
  await expect(greetingText).toHaveText('Hello, Alice!')
})
