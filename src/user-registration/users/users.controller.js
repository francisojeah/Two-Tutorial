"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
/*
import { JwtAuthGuard } from 'src/auth/guards/jwtGuard';
import { UserGuard } from 'src/auth/guards/User.guard';
import { hasRoles } from 'src/auth/roles.decorator';
//import { LoggerInterceptor } from './logger.interceptor';
import { SearchElasticDto, SearchUserDto } from 'src/search/dto/user-search.dto';
*/
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.createForm = function () {
    };
    //@Get('search')
    //@UseInterceptors(CacheInterceptor)
    //public async searchUser(@Query() queryParams: SearchUserDto) {
    //return await this.usersService.search(queryParams);
    //}
    UsersController.prototype.create = function (createUserDto) {
        return this.usersService.create(createUserDto);
    };
    UsersController.prototype.findAll = function () {
        return this.usersService.findAll();
    };
    UsersController.prototype.findOne = function (id) {
        return this.usersService.findOne(+id);
    };
    //@UseGuards(JwtAuthGuard, UserGuard)
    UsersController.prototype.update = function (id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    };
    // @hasRoles(UserRole.ADMIN)
    //@UseGuards(JwtAuthGuard, UserGuard)
    UsersController.prototype.remove = function (id) {
        return this.usersService.remove(+id); //Number(id)?
    };
    // @hasRoles(UserRole.ADMIN)
    UsersController.prototype.updateUserRole = function (id, updateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    };
    UsersController.prototype.setDepartmentById = function (userId, departmentId) {
        return this.usersService.setDepartmentById(+userId, +departmentId);
    };
    UsersController.prototype.unsetDepartmentById = function (departmentId) {
        return this.usersService.unsetDepartmentById(+departmentId);
    };
    UsersController.prototype.loadUserRelation = function (userId) {
        return this.usersService.loadUserRelation(+userId);
    };
    UsersController.prototype.setRoleById = function (userId, roleId) {
        return this.usersService.setRoleById(+userId, +roleId);
    };
    UsersController.prototype.unsetRoleById = function (roleId, userId) {
        return this.usersService.unsetRoleById(+userId, +roleId);
    };
    UsersController.prototype.loadUserRelation1 = function (userId) {
        return this.usersService.loadUserRelation(+userId);
    };
    UsersController.prototype.setUserEducationalHistoryById = function (userId, userEducationalHistoryId) {
        return this.usersService.setUserEducationalHistoryById(+userId, +userEducationalHistoryId);
    };
    UsersController.prototype.unsetUserEducationalHistoryById = function (userEducationalHistoryId) {
        return this.usersService.unsetUserEducationalHistoryById(+userEducationalHistoryId);
    };
    UsersController.prototype.loadUserRelation2 = function (userId) {
        return this.usersService.loadUserRelation(+userId);
    };
    __decorate([
        (0, common_1.Get)('create'),
        (0, common_1.Render)('users/create-user.html')
    ], UsersController.prototype, "createForm");
    __decorate([
        (0, common_1.Get)('/search')
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
        ,
        (0, common_1.Post)(),
        (0, common_1.UsePipes)(common_1.ValidationPipe),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], UsersController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UsersController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UsersController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)(':id/role'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UsersController.prototype, "updateUserRole");
    __decorate([
        (0, common_1.Patch)(':userId/department/:departmentId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Param)('depaartmentId'))
    ], UsersController.prototype, "setDepartmentById");
    __decorate([
        (0, common_1.Delete)('department/:departmentId'),
        __param(0, (0, common_1.Param)('departmentId'))
    ], UsersController.prototype, "unsetDepartmentById");
    __decorate([
        (0, common_1.Get)(':userId/department'),
        __param(0, (0, common_1.Param)('userId'))
    ], UsersController.prototype, "loadUserRelation");
    __decorate([
        (0, common_1.Patch)(':userId/role/:roleId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Param)('roleId'))
    ], UsersController.prototype, "setRoleById");
    __decorate([
        (0, common_1.Delete)(':userId/role/:roleId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Param)('roleId'))
    ], UsersController.prototype, "unsetRoleById");
    __decorate([
        (0, common_1.Get)(':userId/role'),
        __param(0, (0, common_1.Param)('userId'))
    ], UsersController.prototype, "loadUserRelation1");
    __decorate([
        (0, common_1.Patch)(':userId/userEducationalHistory/:userEducationalHistoryId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Param)('userEducationalHistoryId'))
    ], UsersController.prototype, "setUserEducationalHistoryById");
    __decorate([
        (0, common_1.Delete)('userEducationalHistory/:userEducationalHistoryId'),
        __param(0, (0, common_1.Param)('userEducationalHistoryId'))
    ], UsersController.prototype, "unsetUserEducationalHistoryById");
    __decorate([
        (0, common_1.Get)(':userId/userEducationalHistory'),
        __param(0, (0, common_1.Param)('userId'))
    ], UsersController.prototype, "loadUserRelation2");
    UsersController = __decorate([
        (0, common_1.Controller)('users')
        //@UseInterceptors(new LoggerInterceptor())
        ,
        (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({
            whitelist: true,
            transform: true
        }))
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
