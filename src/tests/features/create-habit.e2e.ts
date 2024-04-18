import { expect, test } from '@playwright/test'

test.describe('create habit', () => {
  test('habit should be created', async ({ page }) => {
    await page.goto('/')

    const newHabitName = 'New habit'
    await page.getByTestId('create-habit').click()
    await page.getByLabel('Name').fill(newHabitName)
    await page.getByRole('form').dispatchEvent('submit')

    await page.goto('/')
    expect(page.getByText(newHabitName)).toBeTruthy()
  })
})
