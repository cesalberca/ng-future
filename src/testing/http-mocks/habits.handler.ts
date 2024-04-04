import { http, HttpResponse } from 'msw'
import { Habit } from '../../app/features/habits/domain/habit'
import { api } from './api'
import { CreateHabit } from '../../app/features/habits/features/create-habit/domain/create-habit'
import { LiveStorage } from '@mswjs/storage'
import { Id } from '../../app/core/models/id'
import { HabitMother } from '../mothers/habit.mother'
import { UpdateHabit } from '../../app/features/habits/features/update-habit/domain/update-habit'
import { habitTasks } from './habit-tasks.handler'

export const habits = new LiveStorage<Habit[]>('habits', HabitMother.habits())

export const habitsHandler = [
  http.get<never, never, Habit[]>(api('habits'), () =>
    HttpResponse.json(habits.getValue(), {
      status: 200,
    }),
  ),
  http.get<{ id: Id }, never, Habit>(api('habits/:id'), ({ params }) =>
    HttpResponse.json(
      habits.getValue().find(habit => habit.id === params.id),
      {
        status: 200,
      },
    ),
  ),
  http.put<never, UpdateHabit, never>(api('habits/:id'), async ({ request }) => {
    const data = await request.json()
    habits.update(x => x.map(x => (x.id === data.id ? { ...x, ...data } : x)))
    habitTasks.update(x =>
      x.map(({ date, tasks }) => ({
        date,
        tasks: tasks.map(task => (task.habit.id === data.id ? { ...task, habit: { ...task.habit, ...data } } : task)),
      })),
    )
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.post<CreateHabit, never, Habit>(api('habits'), async ({ request }) => {
    const data = await request.json()
    habits.update(x => [...x, data])
    habitTasks.update(x => x.map(({ date, tasks }) => ({ date, tasks: [...tasks, { habit: data, done: false }] })))
    return HttpResponse.json(data, {
      status: 200,
    })
  }),
  http.delete<{ id: Id }, never, never>(api('habits/:id'), async ({ params }) => {
    const data = params.id

    habits.update(x => x.filter(y => y.id !== data))
    return HttpResponse.json(undefined, {
      status: 204,
    })
  }),
]
