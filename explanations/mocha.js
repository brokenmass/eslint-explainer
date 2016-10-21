module.exports = {
  "mocha/no-exclusive-tests": {
    "description": "disallow exclusive mocha tests"
  },
  "mocha/no-skipped-tests": {
    "description": "disallow skipped mocha tests (fixable)"
  },
  "mocha/no-pending-tests": {
    "description": "disallow pending/unimplemented mocha tests"
  },
  "mocha/handle-done-callback": {
    "description": "enforces handling of callbacks for async tests"
  },
  "mocha/no-synchronous-tests": {
    "description": "disallow synchronous tests"
  },
  "mocha/no-global-tests": {
    "description": "disallow global tests"
  },
  "mocha/no-return-and-callback": {
    "description": "disallow returning in a test or hook function that uses a callback"
  },
  "mocha/valid-test-description": {
    "description": "match test descriptions against a pre-configured regular expression"
  },
  "mocha/valid-suite-description": {
    "description": "match suite descriptions against a pre-configured regular expression"
  },
  "mocha/no-sibling-hooks": {
    "description": "disallow duplicate uses of a hook at the same level inside a describe"
  },
  "mocha/no-mocha-arrows": {
    "description": "disallow arrow functions as arguments to mocha globals"
  },
  "mocha/no-hooks": {
    "description": "disallow hooks"
  },
  "mocha/no-hooks-for-single-case": {
    "description": "disallow hooks for a single test or test suite"
  },
  "mocha/no-top-level-hooks": {
    "description": "disallow top-level hooks"
  },
  "mocha/no-identical-title": {
    "description": "disallow identical titles"
  },
  "mocha/max-top-level-suites": {
    "description": "limit the number of top-level suites in a single file"
  },
  "mocha/no-nested-tests": {
    "description": "disallow tests to be nested within other tests"
  }
};