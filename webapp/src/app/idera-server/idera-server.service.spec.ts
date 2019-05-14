import { TestBed } from '@angular/core/testing';

import { IderaServerService } from './idera-server.service';

describe('IderaServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IderaServerService = TestBed.get(IderaServerService);
    expect(service).toBeTruthy();
  });
});
