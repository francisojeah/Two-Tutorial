import { //CACHE_MANAGER, Inject, 
  Injectable
} from '@nestjs/common';
//import{Cache} from 'cache-manager'

@Injectable()
export class AppService {
  //constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) { }
  
  async getHello() {
    /*await this.cacheManager.set('cached_item', { key: 32 }, { ttl: 10 });
    //await this.cacheManager.del('cached_item');
    //await this.cacheManager.reset();
    const cacheItem = await this.cacheManager.get('cached_item')
    console.log(cacheItem);*/
    return 'Hello World!';
  }
  getHello2(): {}{
    return { message: 'Hello World!', title: 'Messi' };
  }
}
