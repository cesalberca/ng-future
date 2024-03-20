import { TestBed } from '@angular/core/testing'
import { DeleteHabitCmd } from './delete-habit.cmd'

describe('DeleteHabitService', () => {
  let service: DeleteHabitCmd

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(DeleteHabitCmd)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
