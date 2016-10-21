module.exports = {
  "lodash/prefer-constant": {
    "description": "Prefer _.constant over functions returning literals."
  },
  "lodash/prefer-get": {
    "description": "Prefer using _.get or _.has over expression chains like a && a.b && a.b.c."
  },
  "lodash/prefer-includes": {
    "description": "Prefer _.includes over comparing indexOf to -1."
  },
  "lodash/prefer-is-nil": {
    "description": "Prefer _.isNil over checks for both null and undefined."
  },
  "lodash/prefer-lodash-chain": {
    "description": "Prefer using Lodash chains (e.g. _.map) over native and mixed chains."
  },
  "lodash/prefer-lodash-method": {
    "description": "Prefer using Lodash collection methods (e.g. _.map) over native array methods."
  },
  "lodash/prefer-lodash-typecheck": {
    "description": "Prefer using _.is* methods over typeof and instanceof checks when applicable."
  },
  "lodash/prefer-matches": {
    "description": "Prefer _.matches over conditions like a.foo === 1 && a.bar === 2 && a.baz === 3."
  },
  "lodash/prefer-noop": {
    "description": "Prefer _.noop over empty functions."
  },
  "lodash/prefer-over-quantifier": {
    "description": "Prefer _.overSome and _.overEvery instead of checks with && and || for methods that have a boolean check iteratee."
  },
  "lodash/prefer-startswith": {
    "description": "Prefer _.startsWith over a.indexOf(b) === 0."
  },
  "lodash/prefer-times": {
    "description": "Prefer _.times over _.map without using the iteratee's arguments."
  },
  "lodash/chain-style": {
    "description": "Enforce a specific chain style: explicit, implicit, or explicit only when necessary."
  },
  "lodash/chaining": {
    "description": "Prefer a either a Lodash chain or nested Lodash calls"
  },
  "lodash/consistent-compose": {
    "description": "Enforce a specific function composition direction: flow or flowRight."
  },
  "lodash/identity-shorthand": {
    "description": "Prefer identity shorthand syntax"
  },
  "lodash/matches-prop-shorthand": {
    "description": "Prefer matches property shorthand syntax"
  },
  "lodash/matches-shorthand": {
    "description": "Prefer matches shorthand syntax"
  },
  "lodash/no-commit": {
    "description": "Do not use .commit() on chains that should end with .value()"
  },
  "lodash/path-style": {
    "description": "Enforce a specific path style for methods like get and property: array, string, or arrays only for paths with variables."
  },
  "lodash/prefer-compact": {
    "description": "Prefer _.compact over _.filter for only truthy values."
  },
  "lodash/prefer-filter": {
    "description": "Prefer _.filter over _.forEach with an if statement inside."
  },
  "lodash/prefer-flat-map": {
    "description": "Prefer _.flatMap over consecutive map and flatten."
  },
  "lodash/prefer-invoke-map": {
    "description": "Prefer using _.invoke over _.map with a method call inside."
  },
  "lodash/prefer-map": {
    "description": "Prefer _.map over _.forEach with a push inside."
  },
  "lodash/prefer-reject": {
    "description": "Prefer _.reject over filter with !(expression) or x.prop1 !== value"
  },
  "lodash/prefer-thru": {
    "description": "Prefer using _.prototype.thru in the chain and not call functions in the initial value, e.g. _(x).thru(f).map(g)..."
  },
  "lodash/prefer-wrapper-method": {
    "description": "Prefer using array and string methods in the chain and not the initial value, e.g. _(str).split(' ')..."
  },
  "lodash/preferred-alias": {
    "description": "Prefer using main method names instead of aliases.",
    "fixable": true
  },
  "lodash/prop-shorthand": {
    "description": "Use/forbid property shorthand syntax."
  },
  "lodash/callback-binding": {
    "description": "Use or avoid thisArg for Lodash method callbacks, depending on major version."
  },
  "lodash/collection-method-value": {
    "description": "Use value returned from collection methods properly."
  },
  "lodash/collection-return": {
    "description": "Always return a value in iteratees of Lodash collection methods that aren't forEach."
  },
  "lodash/no-double-unwrap": {
    "description": "Do not use .value() on chains that have already ended (e.g. with max() or reduce())",
    "fixable": true
  },
  "lodash/no-extra-args": {
    "description": "Do not use superfluous arguments on Lodash methods with a specified arity."
  },
  "lodash/unwrap": {
    "description": "Prevent chaining without evaluation via value() or non-chainable methods like max().,"
  }
};
