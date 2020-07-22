import { TestBed } from '@angular/core/testing';

import { DocumentTypeApiService } from './document-type-api.service';

describe('DocumentTypeApiService', () => {
  let service: DocumentTypeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentTypeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
