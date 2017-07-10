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
var store_1 = require("@ngrx/store");
var counter_actions_1 = require("../../actions/counter.actions");
var permission_decorator_1 = require("../../decorators/permission.decorator");
var user_actions_1 = require("../../actions/user.actions");
var CounterComponent = (function () {
    function CounterComponent(store) {
        this.users = [];
        this._store = store;
    }
    CounterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._store
            .select('counter')
            .subscribe(function (counter) {
            _this.counter = counter;
        });
        this._store
            .select('users')
            .subscribe(function (users) {
            _this.users = users;
        });
        this._store
            .select('activeUser')
            .subscribe(function (user) {
            _this.selectedUser = user;
        });
    };
    CounterComponent.prototype.selectUser = function (index) {
        this._store.dispatch(new user_actions_1.SetActiveUserAction(this.users[index]));
    };
    CounterComponent.prototype.increaseCounter = function (user, store) {
        var action = new counter_actions_1.IncreaseAction();
        this._store.dispatch(new counter_actions_1.TryAccessAction(user, action));
    };
    CounterComponent.prototype.decreaseCounter = function (user, store) {
        var action = new counter_actions_1.DecreaseAction();
        this._store.dispatch(new counter_actions_1.TryAccessAction(user, action));
    };
    return CounterComponent;
}());
__decorate([
    permission_decorator_1.Permission(counter_actions_1.CounterActionTypes.INCREASE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, store_1.Store]),
    __metadata("design:returntype", void 0)
], CounterComponent.prototype, "increaseCounter", null);
__decorate([
    permission_decorator_1.Permission(counter_actions_1.CounterActionTypes.DECREASE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, store_1.Store]),
    __metadata("design:returntype", void 0)
], CounterComponent.prototype, "decreaseCounter", null);
CounterComponent = __decorate([
    core_1.Component({
        selector: 'counter',
        templateUrl: './counter.component.html',
        styleUrls: ['./counter.component.css']
    }),
    __metadata("design:paramtypes", [store_1.Store])
], CounterComponent);
exports.CounterComponent = CounterComponent;
//# sourceMappingURL=counter.component.js.map