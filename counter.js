function MidiClockCounter (pulsesPerBeat, beatsPerBar) {
  this.pulsesPerBeat = pulsesPerBeat
  this.beatsPerBar = beatsPerBar

  this.pulses = 0
  this.beats = 0
  this.bars = 0
}

MidiClockCounter.prototype.count = function () {
  if (++this.pulses % this.pulsesPerBeat === 0) {
    this.pulses = 0
    if (++this.beats % this.beatsPerBar === 0) {
      this.beats = 0
      this.bars++
    }
  }
}

MidiClockCounter.prototype.reset = function () {
  this.pulses = 0
  this.beats = 0
  this.bars = 0
}

module.exports = MidiClockCounter