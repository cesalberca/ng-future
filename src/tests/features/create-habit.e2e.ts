import { expect, test } from '@playwright/test'

test.describe('create habit', () => {
  test('habit should be created', async ({ page }) => {
    await page.goto('/')

    await page.getByTestId('create-habit').click()
    await page.getByLabel('Name').fill('New habit')
    await page.getByRole('form').dispatchEvent('submit')

    await page.goto('/')
    expect(page.locator).toContain('New habit')
  })
})
