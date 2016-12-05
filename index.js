const subject = {}
subject.fn = (str) => Promise.resolve().then(() => {
  console.log(str + ' then')
  increment()
})
subject.n = 0
const increment = () => {
  module.exports.n++
  console.log('n = ' + module.exports.n)
}

module.exports = subject
