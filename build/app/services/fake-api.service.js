"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var users_mock_1 = require("../mock/users.mock");
var Observable_1 = require("rxjs/Observable");
var FakeApiService = (function () {
    function FakeApiService() {
        this._users = users_mock_1.USERS;
    }
    FakeApiService.prototype.getUsers = function () {
        return Observable_1.Observable.of(this._users);
    };
    return FakeApiService;
}());
FakeApiService = __decorate([
    core_1.Injectable()
], FakeApiService);
exports.FakeApiService = FakeApiService;
//# sourceMappingURL=fake-api.service.js.map