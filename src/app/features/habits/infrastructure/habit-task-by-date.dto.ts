import { HabitTaskByDate } from '../features/habits/domain/habit-task-by-date'

import { IsoDate } from '../../../core/datetime/iso-date'

export type HabitTaskByDateDto = Omit<HabitTaskByDate, 'date'> & { date: IsoDate }
