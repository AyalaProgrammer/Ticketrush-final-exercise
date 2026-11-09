const { calcTotal } = require('../js/pricing');

test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('members receive the larger discount when also students', function () { assertEq(calcTotal(2, true, true), 584); });
test('student discount does not apply to the service fee', function () { assertEq(calcTotal(1, false, true), 309.5); });
