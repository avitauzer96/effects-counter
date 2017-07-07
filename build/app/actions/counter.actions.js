"use strict";
require("rxjs/add/operator/catch");
var CounterActionTypes = (function () {
    function CounterActionTypes() {
    }
    return CounterActionTypes;
}());
CounterActionTypes.TRY_ACCESS = '[Counter] Try Access';
CounterActionTypes.INCREASE = '[Counter] Increase';
CounterActionTypes.DECREASE = '[Counter] Decrease';
CounterActionTypes.ACTION_NOT_ALLOWED = '[Counter] Action Not Allowed';
exports.CounterActionTypes = CounterActionTypes;
var TryAccessAction = (function () {
    function TryAccessAction(user, action) {
        this.type = CounterActionTypes.TRY_ACCESS;
        this.payload = {
            user: user,
            action: action
        };
    }
    return TryAccessAction;
}());
exports.TryAccessAction = TryAccessAction;
var IncreaseAction = (function () {
    function IncreaseAction() {
        this.type = CounterActionTypes.INCREASE;
    }
    return IncreaseAction;
}());
exports.IncreaseAction = IncreaseAction;
var DecreaseAction = (function () {
    function DecreaseAction() {
        this.type = CounterActionTypes.DECREASE;
    }
    return DecreaseAction;
}());
exports.DecreaseAction = DecreaseAction;
var NotAllowedAction = (function () {
    function NotAllowedAction(payload) {
        this.payload = payload;
        this.type = CounterActionTypes.ACTION_NOT_ALLOWED;
    }
    return NotAllowedAction;
}());
exports.NotAllowedAction = NotAllowedAction;
//# sourceMappingURL=counter.actions.js.map