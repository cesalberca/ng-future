import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HabitRemoverComponent } from './habit-remover.component'

describe('HabitRemoverComponent', () => {
  let component: HabitRemoverComponent
  let fixture: ComponentFixture<HabitRemoverComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitRemoverComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HabitRemoverComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
