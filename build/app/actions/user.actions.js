"use strict";
var LOAD_USERS = '[User] Load Users';
var LOAD_SUCCESS = '[User] Load Success';
var LOAD_FAIL = '[User] Load User Fail';
var SET_ACTIVE_USER = '[User] Set Active User';
var UserActionsTypes = (function () {
    function UserActionsTypes() {
    }
    return UserActionsTypes;
}());
UserActionsTypes.LOAD_USERS = LOAD_USERS;
UserActionsTypes.LOAD_SUCCESS = LOAD_SUCCESS;
UserActionsTypes.LOAD_FAIL = LOAD_FAIL;
UserActionsTypes.SET_ACTIVE_USER = SET_ACTIVE_USER;
exports.UserActionsTypes = UserActionsTypes;
var LoadUsersAction = (function () {
    function LoadUsersAction() {
        this.type = UserActionsTypes.LOAD_USERS;
    }
    return LoadUsersAction;
}());
exports.LoadUsersAction = LoadUsersAction;
var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = UserActionsTypes.LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());
exports.LoadSuccessAction = LoadSuccessAction;
var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = UserActionsTypes.LOAD_FAIL;
    }
    return LoadFailAction;
}());
exports.LoadFailAction = LoadFailAction;
var SetActiveUserAction = (function () {
    function SetActiveUserAction(payload) {
        this.payload = payload;
        this.type = UserActionsTypes.SET_ACTIVE_USER;
    }
    return SetActiveUserAction;
}());
exports.SetActiveUserAction = SetActiveUserAction;
//# sourceMappingURL=user.actions.js.map