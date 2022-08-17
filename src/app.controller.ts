import {
  //CacheKey,
  //CacheTTL,
  //CacheInterceptor,
  Controller, Get, Render,
  //UseInterceptors
} from '@nestjs/common';
import { AppService } from './app.service';

//@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  //@CacheKey('some_route'  )
  //@CacheTTL(60)
  async getHello(){
    return this.appService.getHello();
  }
  @Get('hello')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }
}
