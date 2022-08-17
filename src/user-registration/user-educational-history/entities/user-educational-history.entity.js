"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserEducationalHistory = void 0;
var user_entity_1 = require("../../../user-registration/users/entities/user.entity");
var typeorm_1 = require("typeorm");
var userRegistration_types_1 = require("../../../../../../../../../../src/user-registration/userRegistration.types");
var UserEducationalHistory = /** @class */ (function (_super) {
    __extends(UserEducationalHistory, _super);
    function UserEducationalHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], UserEducationalHistory.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEducationalHistory.prototype, "department");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], UserEducationalHistory.prototype, "matriculationNumber");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": userRegistration_types_1.ModeOfEntry, "default": userRegistration_types_1.ModeOfEntry.UTME })
    ], UserEducationalHistory.prototype, "modeOfEntry");
    __decorate([
        (0, typeorm_1.Column)()
    ], UserEducationalHistory.prototype, "programOfStudy");
    __decorate([
        (0, typeorm_1.Column)({ "default": new Date().getFullYear() })
    ], UserEducationalHistory.prototype, "yearOfEntry");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.usereducationalhistory; }, { cascade: true }),
        (0, typeorm_1.JoinColumn)()
    ], UserEducationalHistory.prototype, "user");
    UserEducationalHistory = __decorate([
        (0, typeorm_1.Entity)()
    ], UserEducationalHistory);
    return UserEducationalHistory;
}(typeorm_1.BaseEntity));
exports.UserEducationalHistory = UserEducationalHistory;
