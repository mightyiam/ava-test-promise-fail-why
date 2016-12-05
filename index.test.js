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

test(async t => {
  console.log('first')
  await subject.fn('first')
})

test(async t => {
  console.log('second')
  await subject.fn('second')
  console.log('assert')
  t.is(subject.n, 1)
})
