const { test } = require('ava')

const subject = require('.')

test.beforeEach(() => {
  console.log('beforeEach')
  subject.n = 0
})

test.afterEach(() => {
  console.log('afterEach')
  subject.n = 0
})

test('first test', async t => {
  console.log('first test')
  await subject.fn('first')
})

test('second test', async t => {
  console.log('second test')
  await subject.fn('second')
  console.log('assert')
  t.is(subject.n, 1)
})
