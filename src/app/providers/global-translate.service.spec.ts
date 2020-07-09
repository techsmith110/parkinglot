import { TestBed } from '@angular/core/testing';

import { GlobalTranslateService } from './global-translate.service';

describe('GlobalTranslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalTranslateService = TestBed.get(GlobalTranslateService);
    expect(service).toBeTruthy();
  });
});
