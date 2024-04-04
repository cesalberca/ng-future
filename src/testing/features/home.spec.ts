import { expect, test } from '@playwright/test'
import { HabitMother } from '../mothers/habit.mother'

test('has welcome text', async ({ page }) => {
  await page.goto('/')

  const actual = page.getByText('Hello world')

  await expect(actual).toBeVisible()
})

test('has habit headers', async ({ page }) => {
  await page.goto('/')
  const habits = HabitMother.habits()
  const habitsInPage = habits.map(habit => page.getByText(habit.name))
  habitsInPage.forEach(async habitInPage => await expect(habitInPage).toBeVisible())
})
