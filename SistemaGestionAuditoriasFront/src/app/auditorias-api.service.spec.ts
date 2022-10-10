import { TestBed } from '@angular/core/testing';

import { AuditoriasAPIService } from './auditorias-api.service';

describe('AuditoriasAPIService', () => {
  let service: AuditoriasAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditoriasAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
