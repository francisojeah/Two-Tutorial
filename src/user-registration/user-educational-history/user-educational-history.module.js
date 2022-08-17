"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEducationalHistoryModule = void 0;
var common_1 = require("@nestjs/common");
var user_educational_history_service_1 = require("./user-educational-history.service");
var user_educational_history_controller_1 = require("./user-educational-history.controller");
var typeorm_1 = require("@nestjs/typeorm");
var user_educational_history_entity_1 = require("./entities/user-educational-history.entity");
var UserEducationalHistoryModule = /** @class */ (function () {
    function UserEducationalHistoryModule() {
    }
    UserEducationalHistoryModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_educational_history_entity_1.UserEducationalHistory])],
            controllers: [user_educational_history_controller_1.UserEducationalHistoryController],
            providers: [user_educational_history_service_1.UserEducationalHistoryService]
        })
    ], UserEducationalHistoryModule);
    return UserEducationalHistoryModule;
}());
exports.UserEducationalHistoryModule = UserEducationalHistoryModule;
