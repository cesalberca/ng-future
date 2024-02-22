import { TestBed } from '@angular/core/testing'

import { HabitsInMemoryRepository } from './habits-in-memory.repository'

describe('HabitsRepository', () => {
  let service: HabitsInMemoryRepository

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HabitsInMemoryRepository)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
