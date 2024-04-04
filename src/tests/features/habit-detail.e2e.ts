import { expect, test } from '@playwright/test'
import { HabitMother } from '../mothers/habit.mother'

test.describe('habit detail', () => {
  test('should navigate to detail', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: HabitMother.meditate().name }).click()

    await expect(page.getByText(HabitMother.meditate().name)).toBeVisible()
  })
})
