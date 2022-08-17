import { Test, TestingModule } from '@nestjs/testing';
import { UserEducationalHistoryController } from './user-educational-history.controller';
import { UserEducationalHistoryService } from './user-educational-history.service';

describe('UserEducationalHistoryController', () => {
  let controller: UserEducationalHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEducationalHistoryController],
      providers: [UserEducationalHistoryService],
    }).compile();

    controller = module.get<UserEducationalHistoryController>(UserEducationalHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
