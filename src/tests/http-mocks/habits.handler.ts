import { http, HttpResponse } from 'msw'
import { api } from './api'
import { Habit } from '../../app/features/habits/habit'
import { Id } from '../../app/core/models/id'
import { HabitMother } from '../mothers/habit.mother'

export const habitsHandler = [
  http.get<{ id: Id }, never, Habit>(api('habits/:id'), ({ params }) =>
    HttpResponse.json(
      HabitMother.habits().find(habit => habit.id === params.id),
      {
        status: 200,
      },
    ),
  ),
  http.get<never, never, Habit[]>(api('habits'), () =>
    HttpResponse.json(HabitMother.habits(), {
      status: 200,
    }),
  ),
]
