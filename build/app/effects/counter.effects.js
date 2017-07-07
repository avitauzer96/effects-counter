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
var counter_actions_1 = require("../actions/counter.actions");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var CounterEffects = (function () {
    function CounterEffects(actions$) {
        this.actions$ = actions$;
        this.$requestAccess = this.actions$
            .ofType(counter_actions_1.CounterActionTypes.TRY_ACCESS)
            .map(effects_1.toPayload)
            .switchMap(function (payload) { return Observable_1.Observable.of(payload.action); });
    }
    return CounterEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Observable_1.Observable)
], CounterEffects.prototype, "$requestAccess", void 0);
CounterEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions])
], CounterEffects);
exports.CounterEffects = CounterEffects;
//# sourceMappingURL=counter.effects.js.map