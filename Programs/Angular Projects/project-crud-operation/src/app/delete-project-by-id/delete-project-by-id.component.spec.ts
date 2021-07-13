import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProjectByIdComponent } from './delete-project-by-id.component';

describe('DeleteProjectByIdComponent', () => {
  let component: DeleteProjectByIdComponent;
  let fixture: ComponentFixture<DeleteProjectByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProjectByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProjectByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
