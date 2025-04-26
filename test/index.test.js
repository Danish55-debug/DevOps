const handler = require('../index');

test('handler returns Hello from DevOps!', () => {
  const req = {};
  const res = { end: jest.fn() };
  handler(req, res);
  expect(res.end).toHaveBeenCalledWith('Hello from DevOps!');
});
