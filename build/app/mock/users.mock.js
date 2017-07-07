"use strict";
var counter_actions_1 = require("../actions/counter.actions");
exports.USERS = [
    {
        username: 'john89',
        permissions: [
            { type: counter_actions_1.CounterActionTypes.INCREASE }
        ]
    },
    {
        username: 'adam777',
        permissions: [
            { type: counter_actions_1.CounterActionTypes.DECREASE }
        ]
    },
    {
        username: 'kate18',
        permissions: [
            { type: counter_actions_1.CounterActionTypes.INCREASE },
            { type: counter_actions_1.CounterActionTypes.DECREASE }
        ]
    }
];
//# sourceMappingURL=users.mock.js.map