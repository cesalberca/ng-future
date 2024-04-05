import { expect, test } from '@playwright/test'

test.describe('render habits', () => {
  test('names should be rendered', async ({ page }) => {
    await page.goto('/')
    const habits = [
      {
        id: '33c6daf1-491f-4ab1-a6dd-e0198e1bef91',
        name: 'Read',
      },
      {
        id: '33c6daf1-491f-4ab1-a6dd-e0198e1bef91',
        name: 'Meditate',
      },
    ]
    const habitsInPage = habits.map(habit => page.getByText(habit.name))
    for (const habitInPage of habitsInPage) {
      await expect(habitInPage).toBeVisible()
    }
  })
})
