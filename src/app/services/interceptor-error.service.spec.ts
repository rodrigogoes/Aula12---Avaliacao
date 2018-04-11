import { TestBed, inject } from '@angular/core/testing';

import { InterceptorErrorService } from './interceptor-error.service';

describe('InterceptorErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorErrorService]
    });
  });

  it('should be created', inject([InterceptorErrorService], (service: InterceptorErrorService) => {
    expect(service).toBeTruthy();
  }));
});
