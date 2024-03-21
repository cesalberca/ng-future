import { DeleteHabitCmd } from './delete-habit.cmd'
import { IdMother } from '../../../../testing/mothers/id.mother'
import { instance, mock, verify } from '@typestrong/ts-mockito'
import { HabitsRepository } from '../domain/habits.repository'

describe('DeleteHabitService', () => {
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
