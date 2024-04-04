import { expect, test } from '@playwright/test'

test('has welcome text', async ({ page }) => {
  await page.goto('/')

  const actual = page.getByText('Hello world')

  await expect(actual).toBeVisible()
})
