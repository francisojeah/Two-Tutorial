import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UserEducationalHistoryModule } from './user-educational-history/user-educational-history.module';
import { RolesModule } from './roles/roles.module';
import { DepartmentsModule } from './departments/departments.module';
import { SearchModule } from './search/search.module';
import { RedisCacheModule } from './redis/redis.module';

@Module({
  imports: [UsersModule, UserEducationalHistoryModule, RolesModule, DepartmentsModule, SearchModule, RedisCacheModule]
})
export class UserRegistrationModule {}
