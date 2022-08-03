import { TestBed } from '@angular/core/testing';

import { UploadvideoService } from './uploadvideo.service';

describe('UploadvideoService', () => {
  let service: UploadvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
