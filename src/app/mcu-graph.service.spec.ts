import { TestBed, inject } from '@angular/core/testing';

import { McuGraphService } from './mcu-graph.service';

describe('McuGraphService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [McuGraphService]
    });
  });

  it('should be created', inject([McuGraphService], (service: McuGraphService) => {
    expect(service).toBeTruthy();
  }));
});
