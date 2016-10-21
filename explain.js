'use strict';

const chalk = require('chalk');

const explanations = require('./explanations');
const ruleRegex = /"([^"]+)":/i;

function printPadding(maxRuleLength, lineLength) {
  const paddingLength = lineLength < maxRuleLength ? maxRuleLength - lineLength : 1;
  return new Array(paddingLength).fill(' ').join('');
}

function printExplanation(rule) {
  let explanation = '';
  if (!rule) {
    explanation = chalk.dim('UNKNOWN RULE');
  } else if (rule.deprecated || rule.removed) {
    explanation += chalk.red(rule.deprecated ? 'DEPRECATED' : 'REMOVED');
    if (rule.replacedBy) {
      explanation += chalk.red(' and replaced by ' + rule.replacedBy);
    }
  } else {
    explanation += chalk.green(rule.description);
    if (rule.recommended) {
      explanation += chalk.cyan(' [RECOMMENDED]');
    }

    if (rule.fixable) {
      explanation += chalk.blue(' [AUTOFIX]');
    }
  }

  return explanation;
}

function explain({ rules, colors = false }) {
  const rulesLines = JSON.stringify(rules, null, 2).split('\n');
  const rulesLengths = Object.keys(rules).map(key => key.length)
  const maxRuleLength = Math.max(...rulesLengths) + 10;

  const out = rulesLines.map((line) => {
    const match = line.match(ruleRegex);
    const ruleName = match && match[1];

    if (ruleName && rules.hasOwnProperty(ruleName)) {
      const padding = printPadding(maxRuleLength, line.length);
      const explanation = printExplanation(explanations[ruleName], colors);
      const comment = `${padding}${chalk.dim('// ')}${explanation}`;

      return line.replace(ruleName, chalk.yellow(ruleName)) + comment;
    }
    return line;
  });

  const explainedRules = out.join('\n');

  if (!colors || !chalk.supportsColor) {
    return chalk.stripColor(explainedRules);
  }

  return explainedRules;
}

module.exports = explain;
