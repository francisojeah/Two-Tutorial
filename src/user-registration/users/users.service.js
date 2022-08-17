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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./entities/user.entity");
var typeorm_2 = require("typeorm");
var rxjs_1 = require("rxjs");
var UsersService = /** @class */ (function () {
    //private readonly logger = new Logger(UserService.name);
    function UsersService(userRepository, usersSearchService) {
        this.userRepository = userRepository;
        this.usersSearchService = usersSearchService;
    }
    UsersService.prototype.getByUserName = function (userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                userName: userName
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.create = function (createUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var u, newUser, userData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getByUserName(createUserDto.userName)];
                    case 1:
                        u = _a.sent();
                        if (u) {
                            throw new common_1.HttpException('User with this username already exist', common_1.HttpStatus.CONFLICT);
                        }
                        newUser = this.userRepository.create(createUserDto);
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 2:
                        userData = _a.sent();
                        //await this.userSearchService.indexUser(userData);
                        return [2 /*return*/, userData];
                }
            });
        });
    };
    /*async searchForUsers(text: string) {
      const results = await this.userSearchService.search(text);
      const ids = results.map(result => result.id);
      if (!ids.length) {
        return [];
      }
      return this.userRepository.find({
          where: {
            id: in(ids)
          }
        });
    }*/
    UsersService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find({
                            relations: ['department', 'role', 'user-educational-history']
                        })];
                    case 1: 
                    //return `This action returns all users`;
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.findOne = function (id) {
        //return `This action returns a #${id} user`;
        var u = this.userRepository.findOne({
            where: {
                id: id // same as id:id
            },
            relations: ['department', 'role', 'user-educational-history']
        });
        if (!u) {
            throw new common_1.HttpException('Post with this title does not exist', common_1.HttpStatus.NOT_FOUND);
        }
        return (0, rxjs_1.from)(u);
    };
    UsersService.prototype.findByEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var mail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: {
                                email: email // same as id:id
                            }
                        })];
                    case 1:
                        mail = _a.sent();
                        return [2 /*return*/, mail];
                }
            });
        });
    };
    UsersService.prototype.update = function (id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //return `This action updates a #${id} user`;
                    return [4 /*yield*/, this.userRepository.update(id, updateUserDto)];
                    case 1:
                        //return `This action updates a #${id} user`;
                        _a.sent();
                        return [4 /*yield*/, this.userRepository.findOne({ where: { id: id }, relations: ['department', 'role', 'user-educational-history'] })];
                    case 2:
                        updatedUser = _a.sent();
                        if (updatedUser) {
                            //await this.userSearchService.update(updatedUser);
                            return [2 /*return*/, updatedUser];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.updateUserRole = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.update(id, user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //return `This action removes a #${id} user`;
                    return [4 /*yield*/, this.userRepository["delete"](id)];
                    case 1:
                        //return `This action removes a #${id} user`;
                        _a.sent();
                        //await this.searchService.remove(id);
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UsersService.prototype.searchForUsers = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var results, ids;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersSearchService.search(text)];
                    case 1:
                        results = _a.sent();
                        ids = results.map(function (result) { return result.id; });
                        if (!ids.length) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, this.userRepository.find({
                                where: { id: (0, typeorm_2.In)(ids) }
                            })];
                }
            });
        });
    };
    UsersService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository["delete"](id)];
                    case 1:
                        deleteResponse = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    UsersService.prototype.setDepartmentById = function (userId, departmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "department")
                                .of(userId)
                                .set(departmentId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem setting user for student: ".concat(error_1.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.unsetDepartmentById = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "department")
                                .of(userId)
                                .set(null)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_2.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.setUserEducationalHistoryById = function (userId, userEducationalHistoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "user-educational-history")
                                .of(userId)
                                .set(userEducationalHistoryId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_3 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem setting user for student: ".concat(error_3.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.unsetUserEducationalHistoryById = function (userEducationalHistoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "user-educational-history")
                                .of(userEducationalHistoryId)
                                .set(null)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_4 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_4.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.setRoleById = function (userId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "role")
                                .of(userId)
                                .add(roleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_5 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem setting user for student: ".concat(error_5.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.unsetRoleById = function (userId, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "role")
                                .of(userId)
                                .remove(roleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_6 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_6.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.loadUserRelation = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "department")
                                .of(userId)
                                .loadMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_7 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_7.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.loadUserRelation1 = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "role")
                                .of(userId)
                                .loadMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_8 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_8.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService.prototype.loadUserRelation2 = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.createQueryBuilder()
                                .relation(user_entity_1.User, "user-educational-history")
                                .of(userId)
                                .loadMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_9 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: "There was a problem unsetting user for student: ".concat(error_9.message)
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
