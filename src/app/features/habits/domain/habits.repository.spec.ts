import { TestBed } from '@angular/core/testing'

import { HabitsLocalStorageRepository } from '../infrastructure/habits-local-storage.repository'

describe('HabitsRepository', () => {
  let service: HabitsLocalStorageRepository

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HabitsLocalStorageRepository)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
