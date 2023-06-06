import { CACHE_MANAGER, 
  HttpException, HttpStatus, Inject, Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, In } from 'typeorm';
import { from, Observable } from 'rxjs';
//import { SearchService } from '../../search/search.service';
//import { SearchElasticDto, SearchUserDto } from 'src/search/dto/user-search.dto';
//import { SearchServiceInterface } from 'src/search/interface/search.service.interface';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { Cron, CronExpression } from '@nestjs/schedule';
import UsersSearchService from './userSearch.service';


export interface IPagination {
  page: number;
  limit: number;
}


@Injectable()
export class UsersService {
  //private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly usersSearchService: UsersSearchService,
    //@Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }
  
    
  async create(createUserDto: CreateUserDto) {
    const newUser: User = this.userRepository.create(createUserDto)
    const userData = await this.userRepository.save(newUser);
    await this.usersSearchService.indexUser(userData);
    return userData;
      //return 'This action adds a new user';
  }



  async findAll() {
      //return `This action returns all users`;
    return await this.userRepository.find({
      //relations: ['department', 'role', 'user-educational-history']
    });
  }
  
  findOne(id: number): Observable<CreateUserDto>{
      //return `This action returns a #${id} user`;
      const u = this.userRepository.findOne({
          where: {
          id // same as id:id
        },
        //relations: ['department', 'role', 'user-educational-history']
        
      })
      if (!u) {
        throw new HttpException('Post with this title does not exist', HttpStatus.NOT_FOUND);
      }
      return from(u);
  }
    async findByEmail(email: string){
        const mail = await this.userRepository.findOne({
            where: {
            email// same as id:id
            }
        });
      return mail;
 }


  async update(id: number, updateUserDto: UpdateUserDto) {
      //return `This action updates a #${id} user`;
    await this.userRepository.update(id, updateUserDto);
    const updatedUser = await this.userRepository.findOne({ where: { id },  relations: ['department', 'role', 'user-educational-history']}
    );
    if (updatedUser) {
      await this.usersSearchService.update(updatedUser);
      return updatedUser;
    }
  }

  
    async updateUserRole(id: number, user: User) {
        return await this.userRepository.update(id, user);
    }
  async remove(id: number) {
      //return `This action removes a #${id} user`;
    await this.userRepository.delete(id);
    //await this.usersSearchService.remove(id);
    return null;
  }

  // async searchForUsers(text: string) {
  //   const results = await this.usersSearchService.search(text);
  //   const ids = results.map(result => result.id);
  //   if (!ids.length) {
  //     return [];
  //   }
  //   return this.userRepository.find({
  //     where: { id: In(ids) }
  //   });
  // }

  async deleteUser(id: number) {
    const deleteResponse = await this.userRepository.delete(id);
    /*if (!deleteResponse.affected) {
      throw new UserNotFoundException(id);
    }*/
    //await this.userSearchService.remove(id);
  }
  /*extractROLE(searchParam: SearchUserDto) {
    const ROLE = [];
    if (searchParam.ROLE) {
      if (Array.isArray(searchParam.ROLE)) {
        for (const ROLE_ of searchParam.ROLE) {
          ROLE.push(ROLE_);
        }
      } else {
        ROLE.push(searchParam.ROLE);
      }
    }
    return ROLE;
  }

  async searchUser(params: SearchUserDto): Promise<any> {
    const pagination: IPagination = {
      page: Number(params.page || 1),
      limit: Number(params.limit || 15),
    };
    const skippedItems = (pagination.page - 1) * pagination.limit;
    const ROLEExtract = this.extractROLE(params);
    const { search_term, ROLE } = params;
    let query = `
    select
    count(*) OVER() as count,
    ROLE,
    id,
    ROLE, firstName, lastName, department,email,
    userName, phoneNumber, //dateOfBirth, nationality,
    address, from user,
    jsonb_to_recordset(post.tags) as tagItem(tag text)
    `;
    if (
      search_term ||
      this.extractROLE.length > 0
    ) {
      query = `${query} where id is not NULL`;
    }
    if (search_term) {
      const queryString = `(
        id ILIKE '%${search_term}%' OR
        ROLE ILIKE '%${search_term}%' OR
        firstName ILIKE '%${search_term}%' OR
        lastName ILIKE '%${search_term}%' OR
        department ILIKE '%${search_term}%' OR
        email ILIKE '%${search_term}%' OR
        userName ILIKE '%${search_term}%' OR
        phoneNumber ILIKE '%${search_term}%' OR
        //dateOfBirth ILIKE '%${search_term}%' OR
        nationality ILIKE '%${search_term}%' OR
        address ILIKE '%${search_term}%' OR)`;
      query = `${query} AND (${queryString})`;
    }
    if (ROLEExtract && ROLEExtract.length > 0) {
      let queryString = '';
      for (const ROLE of ROLEExtract) {
        if (!queryString) {
          queryString = `${queryString} ROLEItem.ROLE ILIKE '%${ROLE}%'`;
        } else {
          queryString = `${queryString} OR ROLEItem.ROLE ILIKE '%${ROLE}%'`;
        }
      }
      query = `${query} AND (${queryString})`;
    }
    const queryBuilder = `${query} GROUP BY id ORDER BY userName ${pagination.limit} OFFSET ${skippedItems}`;
    const users = await this.userRepository.query(queryBuilder);
    const count = parseInt(users[0] && users[0].count || 0, 10);
    return {
      users,
      totalCount: count,
    };
  }
/*
@Inject("SearchServiceInterface")
private readonly searchService: SearchServiceInterface<any>
public async search(q: any): Promise<any> {
  const data = ProductSearchObject.searchObject(q);
  return await this.searchService.searchIndex(data);
}
//async searchElastic(param: SearchElasticDto) {
  //return this.searchService.search(param.search_term);
//}
  async search(params: SearchUserDto) {
    try {
      const { page, limit } = params;
      const pagination = {
        page: page || 1,
        limit: limit || 10,
      };
      const { totalCount, users } = await this.searchUser(params);
      return {
        totalCount,
        page: pagination.page,
        limit: pagination.limit,
        data: users.length > 0 ? users : [],
      };
    } catch (err) {
      throw err;
    }
  }*/
  
    
  async setDepartmentById(userId: number, departmentId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "department")
        .of(userId)
        .set(departmentId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetDepartmentById(userId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "department")
        .of(userId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
    
  async setUserEducationalHistoryById(userId: number,userEducationalHistoryId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "user-educational-history")
        .of(userId)
        .set(userEducationalHistoryId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserEducationalHistoryById(userEducationalHistoryId: number) {
    try {
        return await this.userRepository.createQueryBuilder()
        .relation(User, "user-educational-history")
        .of(userEducationalHistoryId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
    
  async setRoleById(userId: number,roleId: number) {
    try {
      return await this.userRepository.createQueryBuilder()
        .relation(User, "role")
        .of(userId)
        .add(roleId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

  async unsetRoleById(userId: number,roleId: number) {
    try {
        return await this.userRepository.createQueryBuilder()
        .relation(User, "role")
        .of(userId)
        .remove(roleId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async loadUserRelation(userId: number) {
    try {
        return await this.userRepository.createQueryBuilder()
        .relation(User, "department")
        .of(userId)
        .loadMany()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async loadUserRelation1(userId: number) {
    try {
        return await this.userRepository.createQueryBuilder()
        .relation(User, "role")
        .of(userId)
        .loadMany()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async loadUserRelation2(userId: number) {
    try {
        return await this.userRepository.createQueryBuilder()
        .relation(User, "user-educational-history")
        .of(userId)
        .loadMany()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


}
