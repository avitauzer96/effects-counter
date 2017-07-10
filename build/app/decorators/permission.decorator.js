"use strict";
var counter_actions_1 = require("../actions/counter.actions");
function Permission(action) {
    return function (target, propertyKey, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }
        descriptor.value = function () {
            var store = arguments[0];
            var subscription = store.select('activeUser')
                .subscribe(function (user) {
                var hasPermission = user.permissions.some(function (item) {
                    return item.type === action.type;
                });
                if (hasPermission) {
                    store.dispatch(new counter_actions_1.TryAccessAction(user, action));
                }
                else if (!hasPermission && store) {
                    store.dispatch(new counter_actions_1.NotAllowedAction("You are not allowed to perform \"" + action.type + "\" action."));
                }
            });
            subscription.unsubscribe();
        };
        return descriptor;
    };
}
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map