function joinWaitlist(list, email) {
  const updatedList = list.slice();
  if (typeof email !== 'string') return updatedList;

  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(normalizedEmail)) {
    return updatedList;
  }

  const alreadyJoined = updatedList.some(function (address) {
    return typeof address === 'string' && address.trim().toLowerCase() === normalizedEmail;
  });
  if (!alreadyJoined) updatedList.push(normalizedEmail);

  return updatedList;
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
