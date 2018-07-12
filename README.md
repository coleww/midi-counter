midi-counter
--------------------

takes in midi clock, 
counts the beats, 
and lets u know when an 8/16/32/64/128 is coming up,
because i like techno but i am bad at mathematics

![demo](./demo.gif)


## setup

```
git clone https://github.com/coleww/midi-counter.git
cd midi-counter
npm install
```

## use

`node index.js`

default settings (configurable in `index.js`):
- midi clock input is on port 0
- 24 clock pulses per beat
- 4 beat per bar
- notifies on 8/16/32/64/128
