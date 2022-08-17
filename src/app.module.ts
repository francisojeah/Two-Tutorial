import {
  CacheInterceptor, CacheModule,
  Module
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
//import { AuthModule } from './auth/auth.module';
import * as Joi from '@hapi/joi';
import { SearchModule } from './user-registration/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
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
      }),
    }),
    TypeOrmModule.forRoot({
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
    
  }), UserRegistrationModule, //AuthModule,//CacheModule
    SearchModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
