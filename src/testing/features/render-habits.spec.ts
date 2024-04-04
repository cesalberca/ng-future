import { expect, test } from '@playwright/test'
import { HabitMother } from '../mothers/habit.mother'

test.describe('render habits', () => {
  test('names should be rendered', async ({ page }) => {
    await page.goto('/')
    const habits = HabitMother.habits()
    const habitsInPage = habits.map(habit => page.getByRole('link', { name: habit.name }))

    for (const habitInPage of habitsInPage) {
      await expect(habitInPage).toBeVisible()
    }
  })
})
