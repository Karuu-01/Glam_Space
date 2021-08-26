import { TestBed } from '@angular/core/testing';

import { LivingRoomService } from './living-room/living-room.service';

describe('LivingRoomService', () => {
  let service: LivingRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivingRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
