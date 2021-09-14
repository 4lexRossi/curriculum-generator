import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCVComponent } from './generate-cv.component';

describe('GeneratePdfComponent', () => {
  let component: GenerateCVComponent;
  let fixture: ComponentFixture<GenerateCVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
