module.exports = {
  "promise/catch-or-return": {
    "description": "Enforces the use of catch on un-returned promises."
  },
  "promise/no-return-wrap": {
    "description": "Avoid wrapping values in Promise.resolve or Promise.reject when not needed."
  },
  "promise/param-names": {
    "description": "Enforce consistent param names when creating new promises."
  },
  "promise/always-return": {
    "description": "Return inside each then to create readable and reusable Promise chains."
  },
  "promise/no-native": {
    "description": "In an ES5 environment, make sure to create a Promise constructor before using."
  },
  "promise/prefer-await-to-then": {
    "description": "Prefer await to then() for reading Promise values"
  },
  "promise/prefer-await-to-callbacks": {
    "description": "Prefer async/await to the callback pattern"
  }
};