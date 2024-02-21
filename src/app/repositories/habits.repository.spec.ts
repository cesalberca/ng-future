import { TestBed } from '@angular/core/testing'

import { HabitsRepository } from './habits.repository'

describe('HabitsRepository', () => {
  let service: HabitsRepository

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HabitsRepository)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
