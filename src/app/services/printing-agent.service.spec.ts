import { TestBed } from '@angular/core/testing';

import { PrintingAgentService } from './printing-agent.service';

describe('PrintingAgentService', () => {
  let service: PrintingAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintingAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
