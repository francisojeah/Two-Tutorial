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
exports.RolesController = void 0;
var common_1 = require("@nestjs/common");
var RolesController = /** @class */ (function () {
    function RolesController(rolesService) {
        this.rolesService = rolesService;
    }
    RolesController.prototype.createForm = function () {
    };
    RolesController.prototype.create = function (createRoleDto) {
        return this.rolesService.create(createRoleDto);
    };
    RolesController.prototype.findAll = function () {
        return this.rolesService.findAll();
    };
    RolesController.prototype.findOne = function (id) {
        return this.rolesService.findOne(+id);
    };
    RolesController.prototype.update = function (id, updateRoleDto) {
        return this.rolesService.update(+id, updateRoleDto);
    };
    RolesController.prototype.remove = function (id) {
        return this.rolesService.remove(+id);
    };
    RolesController.prototype.setRoleById = function (roleId, userId) {
        return this.rolesService.setRoleById(+roleId, +userId);
    };
    RolesController.prototype.unsetRoleById = function (roleId, userId) {
        return this.rolesService.unsetRoleById(+roleId, +userId);
    };
    RolesController.prototype.loadRoleRelation = function (roleId) {
        return this.rolesService.loadRoleRelation(+roleId);
    };
    __decorate([
        (0, common_1.Get)('create'),
        (0, common_1.Render)('roles/create-role.html')
    ], RolesController.prototype, "createForm");
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UsePipes)(common_1.ValidationPipe),
        __param(0, (0, common_1.Body)())
    ], RolesController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], RolesController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], RolesController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], RolesController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], RolesController.prototype, "remove");
    __decorate([
        (0, common_1.Patch)(':roleId/user/:userId'),
        __param(0, (0, common_1.Param)('roleId')),
        __param(1, (0, common_1.Param)('userId'))
    ], RolesController.prototype, "setRoleById");
    __decorate([
        (0, common_1.Delete)(':roleId/user/:userId'),
        __param(0, (0, common_1.Param)('roleId')),
        __param(1, (0, common_1.Param)('userId'))
    ], RolesController.prototype, "unsetRoleById");
    __decorate([
        (0, common_1.Get)(':roleId/user'),
        __param(0, (0, common_1.Param)('roleId'))
    ], RolesController.prototype, "loadRoleRelation");
    RolesController = __decorate([
        (0, common_1.Controller)('roles')
    ], RolesController);
    return RolesController;
}());
exports.RolesController = RolesController;
