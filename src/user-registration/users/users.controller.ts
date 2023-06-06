import { Controller, Get, Post, Body, Patch, Param,Render, Delete, ValidationPipe, UsePipes, UseGuards, UseInterceptors, CacheInterceptor, Query, ClassSerializerInterceptor } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DepartmentsService } from '../departments/departments.service';
import { UserRole } from '../userRegistration.types';

/*import { JwtAuthGuard } from 'src/auth/guards/jwtGuard';
import { UserGuard } from 'src/auth/guards/User.guard';
import { hasRoles } from 'src/auth/roles.decorator';*/
import { LoggerInterceptor } from './logger.interceptor';
//import { SearchElasticDto, SearchUserDto } from 'src/search/dto/user-search.dto';




@Controller('users')
@UseInterceptors(new LoggerInterceptor())
@UseInterceptors(ClassSerializerInterceptor)
@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('create')
  @Render('users/create-user.html')
  createForm() {
  }

 //@Get('search')
  //@UseInterceptors(CacheInterceptor)
  //public async searchUser(@Query() queryParams: SearchUserDto) {
    //return await this.usersService.search(queryParams);
  //}

  //@Get('/search')
//public async search(@Query() query: any): Promise<any> {
  //return await this.usersService.search(query.q);
  //}
  /*
  @UseInterceptors(CacheInterceptor)
  @Get('elastic-search')
  public async searchElastic(@Query() queryParams: SearchElasticDto) {
    return await this.usersService.searchElastic(queryParams);
  }*/
  
  /*@Get('s')
  async getUsers(@Query('search') search: string) {
    if (search) {
      return this.usersService.searchForUsers(search);
    }
    return this.usersService.getAllUsers();
  }  */
    
  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @UseInterceptors(CacheInterceptor)
  // @Get('es')
  // async getPosts(@Query('search') search: string) {
  //   if (search) {
  //     return this.usersService.searchForUsers(search);
  //   }
  //   return this.usersService.findAll();
  // }
    

  //@UseGuards(JwtAuthGuard, UserGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
 // @hasRoles(UserRole.ADMIN)
  //@UseGuards(JwtAuthGuard, UserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);//Number(id)?
  }
 // @hasRoles(UserRole.ADMIN)
  @Patch(':id/role')
  updateUserRole(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Patch(':userId/department/:departmentId')
  setDepartmentById(@Param('userId') userId: number, @Param('depaartmentId') departmentId: number) {
    return this.usersService.setDepartmentById(+userId, +departmentId);
  }

  @Delete('department/:departmentId')
  unsetDepartmentById(@Param('departmentId') departmentId: number) {
    return this.usersService.unsetDepartmentById(+departmentId);
  }
  
  @Get(':userId/department')
  loadUserRelation(@Param('userId') userId: number) {
    return this.usersService.loadUserRelation(+userId);
  }
  @Patch(':userId/role/:roleId')
  setRoleById(@Param('userId') userId: number, @Param('roleId') roleId: number) {
    return this.usersService.setRoleById(+userId, +roleId);
  }

  @Delete(':userId/role/:roleId')
  unsetRoleById(@Param('userId') roleId: number, @Param('roleId') userId: number) {
    return this.usersService.unsetRoleById(+userId,+roleId );
  }

  @Get(':userId/role')
  loadUserRelation1(@Param('userId') userId: number) {
    return this.usersService.loadUserRelation(+userId);
  }
  @Patch(':userId/userEducationalHistory/:userEducationalHistoryId')
  setUserEducationalHistoryById(@Param('userId') userId: number, @Param('userEducationalHistoryId') userEducationalHistoryId: number) {
    return this.usersService.setUserEducationalHistoryById( +userId, +userEducationalHistoryId);
  }

  @Delete('userEducationalHistory/:userEducationalHistoryId')
  unsetUserEducationalHistoryById(@Param('userEducationalHistoryId') userEducationalHistoryId: number) {
    return this.usersService.unsetUserEducationalHistoryById(+userEducationalHistoryId);
  }

  @Get(':userId/userEducationalHistory')
  loadUserRelation2(@Param('userId') userId: number) {
    return this.usersService.loadUserRelation(+userId);
  }
}


