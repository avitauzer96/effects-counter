"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var counter_component_1 = require("./components/counter/counter.component");
var counter_effects_1 = require("./effects/counter.effects");
var counter_reducer_1 = require("./reducers/counter.reducer");
var users_reducer_1 = require("./reducers/users.reducer");
var active_user_reducer_1 = require("./reducers/active-user.reducer");
var fake_api_service_1 = require("./services/fake-api.service");
var user_effects_1 = require("./effects/user.effects");
var reducers = {
    counter: counter_reducer_1.counterReducer,
    users: users_reducer_1.userReducer,
    activeUser: active_user_reducer_1.activeUserReducer
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            store_1.StoreModule.provideStore(reducers),
            effects_1.EffectsModule.run(counter_effects_1.CounterEffects),
            effects_1.EffectsModule.run(user_effects_1.UserEffects)
        ],
        declarations: [app_component_1.AppComponent, counter_component_1.CounterComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [fake_api_service_1.FakeApiService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map