import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectDetailsComponent } from './all-project-details.component';

describe('AllProjectDetailsComponent', () => {
  let component: AllProjectDetailsComponent;
  let fixture: ComponentFixture<AllProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
