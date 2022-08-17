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
exports.UserEducationalHistoryController = void 0;
var common_1 = require("@nestjs/common");
var UserEducationalHistoryController = /** @class */ (function () {
    function UserEducationalHistoryController(userEducationalHistoryService) {
        this.userEducationalHistoryService = userEducationalHistoryService;
    }
    UserEducationalHistoryController.prototype.createForm = function () {
    };
    UserEducationalHistoryController.prototype.create = function (createUserEducationalHistoryDto) {
        return this.userEducationalHistoryService.create(createUserEducationalHistoryDto);
    };
    UserEducationalHistoryController.prototype.findAll = function () {
        return this.userEducationalHistoryService.findAll();
    };
    UserEducationalHistoryController.prototype.findOne = function (id) {
        return this.userEducationalHistoryService.findOne(+id);
    };
    UserEducationalHistoryController.prototype.update = function (id, updateUserEducationalHistoryDto) {
        return this.userEducationalHistoryService.update(+id, updateUserEducationalHistoryDto);
    };
    UserEducationalHistoryController.prototype.remove = function (id) {
        return this.userEducationalHistoryService.remove(+id);
    };
    //Work on relationships 
    UserEducationalHistoryController.prototype.setUserById = function (userEducationalHistoryId, userId) {
        return this.userEducationalHistoryService.setUserById(+userEducationalHistoryId, +userId);
    };
    UserEducationalHistoryController.prototype.unsetUserById = function (userEducationalHistoryId) {
        return this.userEducationalHistoryService.unsetUserById(+userEducationalHistoryId);
    };
    UserEducationalHistoryController.prototype.loadUserEducationalHistoryRelations = function (userEducationalHistoryId) {
        return this.userEducationalHistoryService.loadUserEducationalHistoryRelations(+userEducationalHistoryId);
    };
    __decorate([
        (0, common_1.Get)('create'),
        (0, common_1.Render)('user-educational-histories/create-user-educational-history.html')
    ], UserEducationalHistoryController.prototype, "createForm");
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UsePipes)(common_1.ValidationPipe),
        __param(0, (0, common_1.Body)())
    ], UserEducationalHistoryController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], UserEducationalHistoryController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserEducationalHistoryController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], UserEducationalHistoryController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserEducationalHistoryController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)(':userEducationalHistoryId/user/:userId'),
        __param(0, (0, common_1.Param)('userEducationalHistoryId')),
        __param(1, (0, common_1.Param)('userId'))
    ], UserEducationalHistoryController.prototype, "setUserById");
    __decorate([
        (0, common_1.Delete)(':userEducationalHistoryId/user'),
        __param(0, (0, common_1.Param)('userEducationalHistoryId'))
    ], UserEducationalHistoryController.prototype, "unsetUserById");
    __decorate([
        (0, common_1.Get)(':userEducationalHistoryId/user'),
        __param(0, (0, common_1.Param)('userEducationalHistoryId'))
    ], UserEducationalHistoryController.prototype, "loadUserEducationalHistoryRelations");
    UserEducationalHistoryController = __decorate([
        (0, common_1.Controller)('user-educational-history')
    ], UserEducationalHistoryController);
    return UserEducationalHistoryController;
}());
exports.UserEducationalHistoryController = UserEducationalHistoryController;
