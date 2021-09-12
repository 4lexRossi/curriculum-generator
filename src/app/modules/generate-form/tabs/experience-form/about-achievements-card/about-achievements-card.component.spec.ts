import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAchievementsCardComponent } from './about-achievements-card.component';

describe('AboutAchievementsCardComponent', () => {
  let component: AboutAchievementsCardComponent;
  let fixture: ComponentFixture<AboutAchievementsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAchievementsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAchievementsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
