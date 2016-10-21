'use strict';

const explanations = require('./explanations');
const ruleRegex = /"([a-z\-/]+)":/;

function printDescription(rule, lineLenght, commentPosition) {
  const whitespaceLength = lineLenght < commentPosition ? (commentPosition - lineLenght) : 1;
  const whitespaces = new Array(whitespaceLength).fill(' ').join('');
  let comment = whitespaces + '// ';
  if (!rule) {
    return comment + 'UNKNOWN RULE';
  }

  if (rule.deprecated || rule.removed) {
    comment += rule.deprecated ? 'DEPRECATED' : 'REMOVED';
    if (rule.replacedBy) {
      comment += ': replaced by ' + rule.replacedBy;
    }

    return comment;

  } else {
    comment += rule.description;
    if (rule.recommended) {
      comment += ' [RECOMMENDED]';
    }

    if (rule.fixable) {
      comment += ' [AUTOFIX]';
    }

    return comment;
  }
}

function explain(rules) {
  const rulesLines = JSON.stringify(rules, null, 2).split('\n');
  const maxRulesLength = Math.max(...Object.keys(rules).map(key => key.length));
  const commentPosition = maxRulesLength + 12;

  const out = rulesLines.map((line) => {
    const match = line.match(ruleRegex);
    if (match && match.length === 2 && rules.hasOwnProperty(match[1])) {
      return line + printDescription(explanations[match[1]], line.length, commentPosition)
    }
    return line;
  });

  return out.join('\n');
}

module.exports = explain;
