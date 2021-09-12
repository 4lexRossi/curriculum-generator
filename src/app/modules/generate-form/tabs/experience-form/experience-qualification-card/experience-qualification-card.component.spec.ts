import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceQualificationCardComponent } from './experience-qualification-card.component';

describe('ExperienceQualificationCardComponent', () => {
  let component: ExperienceQualificationCardComponent;
  let fixture: ComponentFixture<ExperienceQualificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceQualificationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceQualificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
