import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveProjectByIdComponent } from './retrieve-project-by-id.component';

describe('RetrieveProjectByIdComponent', () => {
  let component: RetrieveProjectByIdComponent;
  let fixture: ComponentFixture<RetrieveProjectByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveProjectByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveProjectByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
