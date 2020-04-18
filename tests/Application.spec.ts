const Application = require('@quarter/foundation/Application')

test('adds 1 + 2 to equal 3', () => {
  const app = new Application('foo')

  expect(1 + 2).toBe(3)
})
