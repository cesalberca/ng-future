import { DeleteHabitCmd } from './delete-habit.cmd'
import { IdMother } from '../../../../../../testing/mothers/id.mother'
import { instance, mock, verify } from '@typestrong/ts-mockito'
import { HabitsRepository } from '../../../domain/habits.repository'
import { HabitsInMemoryRepository } from '../../../infrastructure/habits-in-memory.repository'

describe('DeleteHabitCmd', () => {
  it('should delete habits', async () => {
    const { sut, habitsRepository } = setup()

    await sut.handle({ id: IdMother.id() })

    verify(habitsRepository.delete(IdMother.id())).once()
  })
})

function setup() {
  const habitsRepository = mock<HabitsRepository>()

  return {
    habitsRepository,
    sut: new DeleteHabitCmd(instance(habitsRepository)),
  }
}

describe('DeleteHabitCmd', () => {
  it('should delete habits', async () => {
    const { sut, habitsRepository } = setup2()

    await sut.handle({ id: IdMother.id() })

    const actual = await habitsRepository.findAll()

    expect(actual).toHaveLength(0)
  })
})

function setup2() {
  const habitsRepository = new HabitsInMemoryRepository()
  return {
    habitsRepository,
    sut: new DeleteHabitCmd(habitsRepository),
  }
}

// TDD Outside in -> playwright
it('should delete a habit from the list when clicking the delete button', () => {})

// TDD Inside out: +tests, +mocks, +fragiles, +pequeñas
