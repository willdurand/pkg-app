// This will output something, in theory.
require('pkg-002');

const packageJson = require('./package.json');

console.log(`${packageJson.name}: ${packageJson.version}`);
