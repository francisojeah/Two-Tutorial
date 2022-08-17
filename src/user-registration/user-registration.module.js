"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRegistrationModule = void 0;
var common_1 = require("@nestjs/common");
var users_module_1 = require("./users/users.module");
var user_educational_history_module_1 = require("./user-educational-history/user-educational-history.module");
var roles_module_1 = require("./roles/roles.module");
var departments_module_1 = require("./departments/departments.module");
var search_module_1 = require("./search/search.module");
var UserRegistrationModule = /** @class */ (function () {
    function UserRegistrationModule() {
    }
    UserRegistrationModule = __decorate([
        (0, common_1.Module)({
            imports: [users_module_1.UsersModule, user_educational_history_module_1.UserEducationalHistoryModule, roles_module_1.RolesModule, departments_module_1.DepartmentsModule, search_module_1.SearchModule]
        })
    ], UserRegistrationModule);
    return UserRegistrationModule;
}());
exports.UserRegistrationModule = UserRegistrationModule;
