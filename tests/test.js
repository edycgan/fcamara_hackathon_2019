const test = require('tape');
const userService = require('../src/services/userService');

test('Check name', (t) => {
    t.assert(userService.getName().name === 'Sophia', 'Correct name!');
    t.end();
})