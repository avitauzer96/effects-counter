"use strict";
var user_actions_1 = require("../actions/user.actions");
function userReducer(state, action) {
    switch (action.type) {
        case user_actions_1.UserActionsTypes.LOAD_USERS:
            return state;
        case user_actions_1.UserActionsTypes.LOAD_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
exports.userReducer = userReducer;
//# sourceMappingURL=users.reducer.js.map