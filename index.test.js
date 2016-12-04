const { test } = require('ava')

const subject = require('.')

test.beforeEach(() => {
  subject.n = 0
})

test(async t => {
  await subject.fn()
})

test(async t => {
  await subject.fn()
  t.is(subject.n, 1)
})
