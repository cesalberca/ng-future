import { expect, test } from '@playwright/test'

test('has welcome text', async ({ page }) => {
  await page.goto('/')

  const actual = page.getByText('NG Future')

  await expect(actual).toBeVisible()
})
