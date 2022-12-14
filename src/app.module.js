"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var user_registration_module_1 = require("./user-registration/user-registration.module");
var typeorm_1 = require("@nestjs/typeorm");
var config_1 = require("@nestjs/config");
//import { AuthModule } from './auth/auth.module';
var Joi = require("@hapi/joi");
var search_module_1 = require("./user-registration/search/search.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    //isGlobal: true,
                    //cache: true,
                    //expandVariables: true,
                    //validate,
                    //load: [
                    //typeormConfig,
                    //redisConfig,
                    //elasticSearch,
                    //],
                    validationSchema: Joi.object({
                        //REDIS_HOST: Joi.string().required(),
                        //REDIS_PORT: Joi.number().required(),
                        //DATABASE_URL: Joi.string().required(),
                        //PORT: Joi.number(),
                        //NODE_ENV: Joi.string().required(),*/
                        ELASTICSEARCH_NODE: Joi.string(),
                        ELASTICSEARCH_USERNAME: Joi.string(),
                        ELASTICSEARCH_PASSWORD: Joi.string()
                    })
                }),
                typeorm_1.TypeOrmModule.forRoot({
                    type: "postgres",
                    host: "localhost",
                    port: 5433,
                    username: "postgres",
                    password: "postgres",
                    database: "two",
                    autoLoadEntities: true,
                    entities: [
                        "dist/**/*.entity{.ts,.js}"
                    ],
                    synchronize: true,
                    logging: false,
                    migrations: []
                }), user_registration_module_1.UserRegistrationModule,
                search_module_1.SearchModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
