import { HabitCreate } from './habit-create'

export type HabitCreateFormModel = Omit<HabitCreate, 'id'>
