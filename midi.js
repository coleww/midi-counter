var midi = require('midi')

module.exports = function (port, callback) {
  var input = new midi.input()
  input.on('message', function(deltaTime, message) {
    callback(message[0])
  })
  input.ignoreTypes(true, false, true)
  input.openPort(port)

  return input
}
