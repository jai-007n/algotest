const pallindrome = require('./index');

test('pallindrome function exists', () => {
  expect(pallindrome).toBeDefined();
});

test('pallindrome a string', () => {
  expect(pallindrome('aabbcbbaa')).toBe(true)
});

test('pallindrome a integer string', () => {
  expect(pallindrome('112211')).toBe(true)
});

test('pallindrome failed reverse a string', () => {
  expect(pallindrome('abcd')).toBe(false)
});

test('pallindrome a string', () => {
  expect(pallindrome('123456')).toBe(false)
});

test('palindrome function is defined', () => {
  expect(typeof pallindrome).toEqual('function');
});

test('"aba" is a palindrome', () => {
  expect(pallindrome('aba')).toBeTruthy();
});

test('" aba" is not a palindrome', () => {
  expect(pallindrome(' aba')).toBeFalsy();
});
