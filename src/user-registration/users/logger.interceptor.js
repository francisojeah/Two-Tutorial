"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggerInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var LoggerInterceptor = /** @class */ (function () {
    function LoggerInterceptor() {
    }
    LoggerInterceptor.prototype.intercept = function (context, next) {
        var userAgent = context.switchToHttp().getRequest().headers['user-agent'];
        var now = Date.now();
        return next.handle().pipe((0, operators_1.tap)(function (data) {
            // you can capture user-agent string of user browser and save it to logger
            // also can calculate the execution time.
            console.log("After... ".concat(Date.now() - now, "ms"), data, userAgent); // you can use any logger like winston
        }), (0, operators_1.catchError)(function (err) {
            console.log('err caught in interceptor, you can log it in logger or send it to newrelic or similar', err);
            throw err; // throwing it for client
        }));
    };
    LoggerInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], LoggerInterceptor);
    return LoggerInterceptor;
}());
exports.LoggerInterceptor = LoggerInterceptor;
