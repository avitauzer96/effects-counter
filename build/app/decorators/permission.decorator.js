"use strict";
var counter_actions_1 = require("../actions/counter.actions");
function Permission(action) {
    return function (target, propertyKey, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var user = arguments[0];
            var store = arguments[1];
            var hasPermission = user.permissions.some(function (item) { return item.type === action; });
            if (hasPermission) {
                originalMethod.apply(this, arguments);
            }
            else if (!hasPermission && store) {
                store.dispatch(new counter_actions_1.NotAllowedAction("You are not allowed to perform \"" + action + "\" action."));
            }
        };
        return descriptor;
    };
}
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map