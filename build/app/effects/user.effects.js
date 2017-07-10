"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var user_actions_1 = require("../actions/user.actions");
var fake_api_service_1 = require("../services/fake-api.service");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var UserEffects = (function () {
    function UserEffects(actions$, fakeApiService) {
        var _this = this;
        this.actions$ = actions$;
        this.loadUsers = this.actions$
            .ofType(user_actions_1.UserActionsTypes.LOAD_USERS)
            .startWith(new user_actions_1.LoadUsersAction())
            .switchMap(function () {
            return _this._fakeApiService.getUsers()
                .map(function (users) { return new user_actions_1.LoadSuccessAction(users); })
                .catch(function (error) { return Observable_1.Observable.of(new user_actions_1.LoadFailAction(error)); });
        });
        this._fakeApiService = fakeApiService;
    }
    return UserEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], UserEffects.prototype, "loadUsers", void 0);
UserEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        fake_api_service_1.FakeApiService])
], UserEffects);
exports.UserEffects = UserEffects;
//# sourceMappingURL=user.effects.js.map