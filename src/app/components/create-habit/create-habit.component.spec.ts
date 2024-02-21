import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CreateHabitComponent } from './create-habit.component'

describe('CreateHabitComponent', () => {
  let component: CreateHabitComponent
  let fixture: ComponentFixture<CreateHabitComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHabitComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CreateHabitComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
