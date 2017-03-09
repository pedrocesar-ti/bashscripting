'use strict';

const ws = require('workshopper-adventure');
const path = require('path');

var bashscripting = ws({
    title: 'BASHSCRIPTING',
    exerciseDir: path.join(__dirname, 'exercise'),
    appDir: __dirname,
    languages: ['en', 'pt']
});

module.exports = bashscripting;
