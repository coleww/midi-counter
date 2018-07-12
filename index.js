var Counter = require('./Counter')
var connectMidi = require('./midi')
var makePrintHandler = require('./print')

var MIDI_PORT = 0
var INTERVALS_TO_TRACK = [8, 16, 32, 64, 128]
var PULSES_PER_BEAT = 24
var BEATS_PER_BAR = 4

var counter = new Counter(PULSES_PER_BEAT, BEATS_PER_BAR) 
var printMessage = makePrintHandler(INTERVALS_TO_TRACK)

function midiHandler(message) {
  if(message === 250) {
    // midi play/start message, reset the counters
    counter.reset()
  }
  if (message === 248) {
    // midi clock pulse
    counter.count()
  }
  if (counter.pulses === 0) {
    // on a new beat, print the new info
    printMessage(counter.beats, counter.bars)
  }
}

connectMidi(MIDI_PORT, midiHandler)
