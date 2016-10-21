'use strict';

const config = require('./config');
const explain = require('../explain');

console.log(explain(config.rules));
