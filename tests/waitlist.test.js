const { joinWaitlist } = require('../js/waitlist');

test('adds a valid email in lowercase without surrounding whitespace', function () {
  const list = [];
  const updatedList = joinWaitlist(list, '  Member@Example.com  ');
  assertEq(updatedList.length, 1);
  assertEq(updatedList[0], 'member@example.com');
});

test('does not mutate the original list', function () {
  const list = ['first@example.com'];
  const updatedList = joinWaitlist(list, 'second@example.com');
  assertEq(list.length, 1);
  assertEq(updatedList.length, 2);
});

test('returns a new list when the email is invalid', function () {
  const list = ['first@example.com'];
  const updatedList = joinWaitlist(list, 'not-an-email');
  assertEq(updatedList.length, 1);
  assertEq(updatedList === list, false);
});

test('rejects an email without a dot after the at sign', function () {
  assertEq(joinWaitlist([], 'member@example').length, 0);
});

test('does not add an existing email again', function () {
  const updatedList = joinWaitlist(['member@example.com'], ' MEMBER@EXAMPLE.COM ');
  assertEq(updatedList.length, 1);
});

test('does not add a duplicate when the existing email has different casing', function () {
  const updatedList = joinWaitlist(['Member@Example.com'], 'member@example.com');
  assertEq(updatedList.length, 1);
});
