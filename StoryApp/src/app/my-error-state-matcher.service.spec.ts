import { TestBed, inject } from '@angular/core/testing';

import { MyErrorStateMatcherService } from './my-error-state-matcher.service';

describe('MyErrorStateMatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyErrorStateMatcherService]
    });
  });

  it('should be created', inject([MyErrorStateMatcherService], (service: MyErrorStateMatcherService) => {
    expect(service).toBeTruthy();
  }));
});
