import { TestBed } from '@angular/core/testing';

import { EmailFormService } from './email-form.service';

describe('EmailFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailFormService = TestBed.get(EmailFormService);
    expect(service).toBeTruthy();
  });
});
