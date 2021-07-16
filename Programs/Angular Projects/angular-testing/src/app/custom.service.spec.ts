import { TestBed } from '@angular/core/testing';

import { CustomService } from './custom.service';

describe('CustomService', () => {
  let service: CustomService;

  beforeEach(() => {
    //TestBed.configureTestingModule({});
    service = TestBed.inject(CustomService);    //DI using TestBed
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("testing for display function ",()=> {
    expect(service.displayServiceMsg()).toEqual("Welcome to My Service class");
  })
  
});
