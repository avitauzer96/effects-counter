"use strict";
function Permission(action) {
    return function (target, propertyKey, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var user = arguments[0];
            var hasPermission = user.permissions.some(function (item) { return item.type === action; });
            if (hasPermission) {
                originalMethod.apply(this, arguments);
            }
        };
        return descriptor;
    };
}
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map