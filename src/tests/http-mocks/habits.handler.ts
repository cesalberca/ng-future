import { http, HttpResponse } from 'msw'
import { api } from './api'
import { Habit } from '../../app/features/habits/habit'
import { Id } from '../../app/core/models/id'
import { HabitMother } from '../mothers/habit.mother'
import { CreateHabit } from '../../app/features/habits/habit-create/domain/create-habit'
import { LiveStorage } from '@mswjs/storage'

export const habits = new LiveStorage<Habit[]>('habits', HabitMother.habits())

export const habitsHandler = [
  http.get<{ id: Id }, never, Habit>(api('habits/:id'), ({ params }) =>
    HttpResponse.json(
      habits.getValue().find(habit => habit.id === params.id),
      {
        status: 200,
      },
    ),
  ),
  http.get<never, never, Habit[]>(api('habits'), () =>
    HttpResponse.json(habits.getValue(), {
      status: 200,
    }),
  ),
  http.post<CreateHabit, never, Habit>(api('habits'), async ({ request }) => {
    const data = await request.json()
    habits.update(x => [...x, data])
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
]
