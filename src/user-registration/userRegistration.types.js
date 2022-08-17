"use strict";
exports.__esModule = true;
exports.UserRole = exports.ModeOfEntry = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["Female"] = "female";
    Gender["Male"] = "male";
})(Gender = exports.Gender || (exports.Gender = {}));
var ModeOfEntry;
(function (ModeOfEntry) {
    ModeOfEntry["UTME"] = "UTME";
    ModeOfEntry["DE"] = "Direct Entry";
    ModeOfEntry["Transfer"] = "Transfer";
})(ModeOfEntry = exports.ModeOfEntry || (exports.ModeOfEntry = {}));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["EDITOR"] = "editor";
    UserRole["USER"] = "user";
    UserRole["GHOST"] = "ghost";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
//export enum Department
