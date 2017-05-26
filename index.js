'use strict';

const ws = require('workshopper-adventure');
const path = require('path');

var shellscripting = ws({
    title: 'SHELLSCRIPTING',
    exerciseDir: path.join(__dirname, 'exercise'),
    appDir: __dirname,
    appRepo: 'https://github.com/pedrocesar-ti/shellscripting',
    languages: ['en', 'pt']
});

module.exports = shellscripting;

