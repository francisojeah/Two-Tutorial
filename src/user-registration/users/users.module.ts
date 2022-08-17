//import { CacheModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { UserRepository } from './repository/user.repository';
import { User } from './entities/user.entity';
//import { SearchModule } from 'src/search/search.module';
//import { RedisCacheModule } from 'src/redis/redis.module';
//import { EventEmitterModule } from '@nestjs/event-emitter';
//import { ScheduleModule } from '@nestjs/schedule';
//import { SearchService } from '../../search/search.service';
//import { RedisCacheService } from '../../redis/redis.service';
import * as redisStore from 'cache-manager-redis-store';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule, Module } from '@nestjs/common';
import { SearchModule } from '../search/search.module';
import UsersSearchService from './userSearch.service';
import { RedisCacheService } from '../redis/redis.service';
import { RedisCacheModule } from '../redis/redis.module';
//import UsersSearchService from './userSearch.service';

@Module({
  imports: [
    SearchModule, 
    RedisCacheModule,
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          store: redisStore,
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          ttl: 120
      }),
    }),
    //EventEmitterModule.forRoot(),
    //ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersSearchService, RedisCacheService
  ]
})
export class UsersModule {}
