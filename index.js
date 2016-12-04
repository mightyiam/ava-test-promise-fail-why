const subject = {}
subject.fn = () => Promise.resolve().then(increment)
subject.n = 0
const increment = () => module.exports.n++

module.exports = subject
