"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DepartmentsModule = void 0;
var common_1 = require("@nestjs/common");
var departments_service_1 = require("./departments.service");
var departments_controller_1 = require("./departments.controller");
var typeorm_1 = require("@nestjs/typeorm");
var department_entity_1 = require("./entities/department.entity");
var DepartmentsModule = /** @class */ (function () {
    function DepartmentsModule() {
    }
    DepartmentsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([department_entity_1.Department])],
            controllers: [departments_controller_1.DepartmentsController],
            providers: [departments_service_1.DepartmentsService]
        })
    ], DepartmentsModule);
    return DepartmentsModule;
}());
exports.DepartmentsModule = DepartmentsModule;
