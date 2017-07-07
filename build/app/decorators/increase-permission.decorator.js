"use strict";
var Observable_1 = require("rxjs/Observable");
var counter_actions_1 = require("../actions/counter.actions");
function IncreasePermission(target, key, descriptor) {
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var user = arguments[0];
        user.checkPermissions = function () {
            if (this.permissions.canIncrease) {
                return Observable_1.Observable.of(new counter_actions_1.IncreaseAction());
            }
            return Observable_1.Observable.throw("You are not allowed to perform \"" + counter_actions_1.CounterActionTypes.INCREASE + "\" action.")
                .catch(function (error) {
                return Observable_1.Observable.of(new counter_actions_1.NotAllowedAction(error));
            });
        };
        return originalMethod.apply(this, arguments);
    };
    return descriptor;
}
exports.IncreasePermission = IncreasePermission;
//# sourceMappingURL=increase-permission.decorator.js.map