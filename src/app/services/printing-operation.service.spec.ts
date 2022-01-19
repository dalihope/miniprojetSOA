import { TestBed } from '@angular/core/testing';

import { PrintingOperationService } from './printing-operation.service';

describe('PrintingOperationService', () => {
  let service: PrintingOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintingOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
