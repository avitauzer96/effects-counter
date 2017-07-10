"use strict";
var user_actions_1 = require("../actions/user.actions");
function activeUserReducer(state, action) {
    switch (action.type) {
        case user_actions_1.UserActionsTypes.SET_ACTIVE_USER:
            return action.payload;
        default:
            return state;
    }
}
exports.activeUserReducer = activeUserReducer;
//# sourceMappingURL=active-user.reducer.js.map