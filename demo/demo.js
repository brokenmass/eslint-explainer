'use strict';

const config = require('./config');
const explain = require('../explain');

const explainedRules = explain({
  rules: config.rules,
  colors: true
});

console.log(explainedRules);