import { Module } from '@nestjs/common';
import { UserEducationalHistoryService } from './user-educational-history.service';
import { UserEducationalHistoryController } from './user-educational-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEducationalHistoryRepository } from './repository/userEducationalHistory.repository';
import { UserEducationalHistory } from './entities/user-educational-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEducationalHistory])],
  controllers: [UserEducationalHistoryController],
  providers: [UserEducationalHistoryService]
})
export class UserEducationalHistoryModule {}
