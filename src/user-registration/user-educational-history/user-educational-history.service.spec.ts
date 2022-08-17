import { Test, TestingModule } from '@nestjs/testing';
import { UserEducationalHistoryService } from './user-educational-history.service';

describe('UserEducationalHistoryService', () => {
  let service: UserEducationalHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEducationalHistoryService],
    }).compile();

    service = module.get<UserEducationalHistoryService>(UserEducationalHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
