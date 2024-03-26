import { HabitPage } from '../../app/features/habits/features/habit/delivery/habit/habit.page'
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { InjectionTokens } from '../../app/core/tokens/injection-tokens'
import { EmptyMiddleware } from '../../app/core/use-case/middlewares/empty.middleware'
import { HabitsInMemoryRepository } from '../../app/features/habits/infrastructure/habits-in-memory.repository'

describe('delete habit', () => {
  let fixture: ComponentFixture<HabitPage>
  //let sut: HabitPage

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitPage],
      providers: [
        {
          provide: InjectionTokens.MIDDLEWARES,
          useClass: EmptyMiddleware,
          multi: true,
        },
        {
          provide: InjectionTokens.HABITS_REPOSITORY,
          useClass: HabitsInMemoryRepository,
        },
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(HabitPage)
    //sut = fixture.componentInstance
    //sut.delete()
    // TODO: Modify input
    fixture.detectChanges()
  })

  it('should delete a habit', () => {
    console.log(fixture.debugElement.nativeElement.innerHTML)
    fixture.debugElement.query(By.css('[data-testid="delete-habit-button"]')).triggerEventHandler('click', {})

    fixture.detectChanges()

    const list = fixture.debugElement.query(By.css('[data-testid="habits"]'))
    expect(list.children).toHaveLength(0)
  })
})
