var colors = require('colors')

module.exports = function (intervals) {
  var biggestInterval = Math.max(...intervals).toString().length

  function leftPad(num) {
    return num.toString().padStart(biggestInterval)
  }

  return function printMessage(beats, bars) {
    console.log('\033[2J')
    var frame = `|${beats + 1} / ${bars}|    `.green
    if (bars) {
      intervals.forEach(function (interval) {      
        if (bars % interval === interval - 1) {
          frame += `${leftPad(interval - 1)} ....    |`.yellow
        }
        if (bars % interval === 0) {
          frame += `${leftPad(interval)} !!!!    |`.red
        }
      })
    }
    console.log(frame + '\n\n\n\n\n\n\n\n\n')
  }
}
