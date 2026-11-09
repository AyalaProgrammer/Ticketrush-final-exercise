const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('member discount does not apply to the service fee', function () { assertEq(calcTotal(1, true), 292); });
test('members may buy up to 4 tickets', function () { assertEq(maxTickets(true), 4); });
test('members cannot buy more than 4 tickets', function () { assertEq(calcTotal(5, true), null); });
test('quantities below 1 are rejected', function () { assertEq(calcTotal(0), null); });
test('regular customers cannot buy more than 8 tickets', function () { assertEq(calcTotal(9), null); });
test('fractional ticket quantities are rejected', function () { assertEq(calcTotal(1.5), null); });
