// This file isn't tarspiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features taht Mocha doesn't understand
require.extensions['.css'] = function () {};