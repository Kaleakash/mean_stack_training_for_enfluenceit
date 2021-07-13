import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProjectDetailsComponent } from './store-project-details.component';

describe('StoreProjectDetailsComponent', () => {
  let component: StoreProjectDetailsComponent;
  let fixture: ComponentFixture<StoreProjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreProjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
