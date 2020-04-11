const path = require('path')

exports.resolve = function (...value) {
  return path.resolve(__dirname, '..', ...value)
}
