import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIdiomCardComponent } from './skills-idiom-card.component';

describe('SkillsIdiomCardComponent', () => {
  let component: SkillsIdiomCardComponent;
  let fixture: ComponentFixture<SkillsIdiomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsIdiomCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsIdiomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
