import { habitTasksHandler } from './habit-tasks.handler'
import { habitsHandler } from './habits.handler'
import { usersHandler } from './users.handler'

export const handlers = [...habitsHandler, ...usersHandler, ...habitTasksHandler]
