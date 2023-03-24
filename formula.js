var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseInt (lines[0])
const pi = 3.14159

var calculo = 4/3*pi*Math.pow(raio , 3)
console.log('VOLUME = ' + calculo .toFixed(3))
