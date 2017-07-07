"use strict";
var counter_actions_1 = require("../actions/counter.actions");
var COUNTER_DEFAULT = {
    value: 0,
    error: ''
};
function counterReducer(state, action) {
    if (state === void 0) { state = COUNTER_DEFAULT; }
    switch (action.type) {
        case counter_actions_1.CounterActionTypes.ACTION_NOT_ALLOWED:
            return Object.assign({}, state, { error: action.payload });
        case counter_actions_1.CounterActionTypes.INCREASE:
            return Object.assign({}, state, { value: ++state.value, error: '' });
        case counter_actions_1.CounterActionTypes.DECREASE:
            return Object.assign({}, state, { value: --state.value, error: '' });
        default:
            return state;
    }
}
exports.counterReducer = counterReducer;
//# sourceMappingURL=counter.reducer.js.map