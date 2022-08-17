"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
//import { CacheModule, Module } from '@nestjs/common';
var users_service_1 = require("./users.service");
var users_controller_1 = require("./users.controller");
var typeorm_1 = require("@nestjs/typeorm");
//import { UserRepository } from './repository/user.repository';
var user_entity_1 = require("./entities/user.entity");
//import { SearchModule } from 'src/search/search.module';
//import { RedisCacheModule } from 'src/redis/redis.module';
//import { EventEmitterModule } from '@nestjs/event-emitter';
//import { ScheduleModule } from '@nestjs/schedule';
//import { SearchService } from '../../search/search.service';
//import { RedisCacheService } from '../../redis/redis.service';
//import * as redisStore from 'cache-manager-redis-store';
//import { ConfigModule, ConfigService } from '@nestjs/config';
var common_1 = require("@nestjs/common");
var search_module_1 = require("../search/search.module");
var userSearch_service_1 = require("./userSearch.service");
//import UsersSearchService from './userSearch.service';
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        (0, common_1.Module)({
            imports: [
                search_module_1.SearchModule,
                // RedisCacheModule,
                /*CacheModule.registerAsync({
                  imports: [ConfigModule],
                  inject: [ConfigService],
                    useFactory: (configService: ConfigService) => ({
                      store: redisStore,
                      host: configService.get('REDIS_HOST'),
                      port: configService.get('REDIS_PORT'),
                      ttl: 120
                  }),
                }),*/
                //EventEmitterModule.forRoot(),
                //ScheduleModule.forRoot(),
                typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])
            ],
            controllers: [users_controller_1.UsersController],
            providers: [users_service_1.UsersService, userSearch_service_1["default"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
