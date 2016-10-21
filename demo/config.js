module.exports = {
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "jsx": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "plugins": [
    "no-use-extend-native",
    "babel",
    "import",
    "flowtype",
    "mocha",
    "jsdoc",
    "lodash",
    "promise",
    "react"
  ],
  "rules": {
    "accessor-pairs": 2,
    "array-bracket-spacing": [
      0,
      "never"
    ],
    "array-callback-return": 2,
    "arrow-body-style": [
      2,
      "always"
    ],
    "arrow-parens": [
      0,
      "always"
    ],
    "arrow-spacing": [
      2,
      {
        "after": true,
        "before": true
      }
    ],
    "babel/array-bracket-spacing": [
      0,
      "never"
    ],
    "babel/arrow-parens": [
      2,
      "always"
    ],
    "babel/flow-object-type": [
      2,
      "comma"
    ],
    "babel/func-params-comma-dangle": [
      2,
      "never"
    ],
    "babel/generator-star-spacing": 1,
    "babel/new-cap": 0,
    "babel/no-await-in-loop": 2,
    "babel/object-curly-spacing": [
      2,
      "never"
    ],
    "babel/object-shorthand": [
      2,
      "always"
    ],
    "block-scoped-var": 2,
    "block-spacing": [
      2,
      "always"
    ],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "callback-return": 2,
    "camelcase": 0,
    "class-methods-use-this": 2,
    "comma-dangle": [
      2,
      "never"
    ],
    "comma-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "comma-style": [
      2,
      "last"
    ],
    "complexity": [
      1,
      10
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "consistent-return": 2,
    "consistent-this": [
      2,
      "self"
    ],
    "constructor-super": 2,
    "curly": 2,
    "default-case": 0,
    "dot-location": [
      2,
      "property"
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "flowtype/boolean-style": [
      2,
      "boolean"
    ],
    "flowtype/define-flow-type": 2,
    "flowtype/generic-spacing": [
      2,
      "never"
    ],
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": 0,
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always"
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always"
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never"
    ],
    "flowtype/space-before-type-colon": [
      1,
      "never"
    ],
    "flowtype/type-id-match": [
      2,
      "^Type([A-Z][a-z0-9]+)+$"
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always"
    ],
    "flowtype/use-flow-type": 2,
    "flowtype/valid-syntax": 2,
    "func-call-spacing": [
      2,
      "never"
    ],
    "func-name-matching": 2,
    "func-names": 0,
    "func-style": [
      2,
      "expression"
    ],
    "generator-star-spacing": [
      0,
      {
        "after": false,
        "before": true
      }
    ],
    "global-require": 2,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-length": [
      1,
      {
        "exceptions": [
          "P",
          "R",
          "$",
          "_"
        ],
        "max": 50,
        "min": 2
      }
    ],
    "id-match": [
      2,
      "(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)",
      {
        "onlyDeclarations": true,
        "properties": true
      }
    ],
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [
      0,
      "never"
    ],
    "import/imports-first": [
      2,
      {
        "absolute-first": true
      }
    ],
    "import/named": 2,
    "import/namespace": 2,
    "import/newline-after-import": 2,
    "import/no-amd": 2,
    "import/no-commonjs": 2,
    "import/no-deprecated": 1,
    "import/no-duplicates": 0,
    "import/no-extraneous-dependencies": [
      2,
      {
        "devDependencies": true,
        "optionalDependencies": true
      }
    ],
    "import/no-mutable-exports": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-namespace": 2,
    "import/no-nodejs-modules": 0,
    "import/no-restricted-paths": 0,
    "import/no-unresolved": 2,
    "import/order": [
      2,
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }
    ],
    "import/prefer-default-export": 1,
    "indent": [
      2,
      2
    ],
    "init-declarations": [
      2,
      "never",
      {
        "ignoreForLoopInit": false
      }
    ],
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": [
      1,
      "always"
    ],
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-hyphen-before-description": 0,
    "jsdoc/require-param": 0,
    "jsdoc/require-param-description": 0,
    "jsdoc/require-param-type": 0,
    "jsdoc/require-returns-description": 0,
    "jsdoc/require-returns-type": 0,
    "jsx-quotes": [
      2,
      "prefer-single"
    ],
    "key-spacing": [
      2,
      {
        "afterColon": true,
        "beforeColon": false
      }
    ],
    "keyword-spacing": [
      2,
      {
        "after": true,
        "before": true
      }
    ],
    "line-comment-position": [
      2,
      {
        "position": "above"
      }
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "lines-around-comment": [
      2,
      {
        "beforeBlockComment": false,
        "beforeLineComment": false
      }
    ],
    "lines-around-directive": [
      2,
      "always"
    ],
    "lodash/callback-binding": 1,
    "lodash/chain-style": [
      1,
      "explicit"
    ],
    "lodash/collection-method-value": 1,
    "lodash/collection-return": 1,
    "lodash/consistent-compose": [
      1,
      "flow"
    ],
    "lodash/identity-shorthand": [
      1,
      "always"
    ],
    "lodash/matches-prop-shorthand": 1,
    "lodash/matches-shorthand": [
      1,
      "always",
      3
    ],
    "lodash/no-commit": 1,
    "lodash/no-double-unwrap": 1,
    "lodash/no-extra-args": 1,
    "lodash/no-single-chain": 1,
    "lodash/path-style": 0,
    "lodash/prefer-chain": 1,
    "lodash/prefer-compact": 1,
    "lodash/prefer-constant": 0,
    "lodash/prefer-filter": [
      1,
      3
    ],
    "lodash/prefer-get": [
      1,
      3
    ],
    "lodash/prefer-includes": 1,
    "lodash/prefer-invoke-map": 0,
    "lodash/prefer-is-nil": 1,
    "lodash/prefer-lodash-chain": 1,
    "lodash/prefer-lodash-method": 0,
    "lodash/prefer-lodash-typecheck": 1,
    "lodash/prefer-map": 1,
    "lodash/prefer-matches": 1,
    "lodash/prefer-noop": 0,
    "lodash/prefer-over-quantifier": 1,
    "lodash/prefer-reject": [
      1,
      3
    ],
    "lodash/prefer-startswith": 0,
    "lodash/prefer-thru": 1,
    "lodash/prefer-times": 1,
    "lodash/prefer-wrapper-method": 1,
    "lodash/preferred-alias": 1,
    "lodash/prop-shorthand": 1,
    "lodash/unwrap": 1,
    "max-len": 1,
    "max-nested-callbacks": [
      1,
      3
    ],
    "max-statements-per-line": [
      2,
      {
        "max": 1
      }
    ],
    "mocha/no-exclusive-tests": 2,
    "mocha/no-hooks-for-single-case": 1,
    "mocha/no-identical-title": 2,
    "mocha/no-return-and-callback": 2,
    "mocha/no-top-level-hooks": 2,
    "multiline-ternary": 0,
    "new-cap": [
      0,
      {
        "capIsNew": false,
        "newIsCap": true
      }
    ],
    "new-parens": 2,
    "newline-after-var": [
      2,
      "always"
    ],
    "newline-before-return": 2,
    "newline-per-chained-call": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": 2,
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 1,
    "no-continue": 2,
    "no-control-regex": 2,
    "no-debugger": 1,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 0,
    "no-empty": 1,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-implicit-coercion": 2,
    "no-implicit-globals": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ],
    "no-native-reassign": 2,
    "no-negated-condition": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-path-concat": 2,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-redeclare": [
      2,
      {
        "builtinGlobals": true
      }
    ],
    "no-regex-spaces": 2,
    "no-restricted-globals": 0,
    "no-restricted-modules": 0,
    "no-restricted-properties": 0,
    "no-restricted-syntax": [
      2,
      "TemplateLiteral"
    ],
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": [
      2,
      {
        "builtinGlobals": false,
        "hoist": "all"
      }
    ],
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 1,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,
    "no-use-extend-native/no-use-extend-native": 2,
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-useless-rename": [
      2,
      {
        "ignoreDestructuring": false,
        "ignoreExport": false,
        "ignoreImport": false
      }
    ],
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": [
      1,
      {
        "location": "start",
        "terms": [
          "todo",
          "@toto"
        ]
      }
    ],
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [
      0,
      "never"
    ],
    "object-property-newline": [
      2,
      {
        "allowMultiplePropertiesPerLine": false
      }
    ],
    "object-shorthand": [
      0,
      "always"
    ],
    "one-var": 0,
    "one-var-declaration-per-line": 2,
    "operator-assignment": [
      2,
      "always"
    ],
    "operator-linebreak": [
      2,
      "after"
    ],
    "padded-blocks": [
      2,
      "never"
    ],
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-numeric-literals": 2,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 0,
    "promise/always-return": 2,
    "promise/catch-or-return": 2,
    "promise/no-native": 1,
    "promise/param-names": 2,
    "quote-props": [
      2,
      "as-needed"
    ],
    "quotes": [
      2,
      "single"
    ],
    "radix": 2,
    "react/display-name": 0,
    "react/forbid-component-props": 2,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": [
      2,
      "always"
    ],
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-curly-spacing": [
      2,
      "never",
      {
        "allowMultiline": true
      }
    ],
    "react/jsx-equals-spacing": [
      2,
      "never"
    ],
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-handler-names": [
      2,
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-indent": [
      2,
      2
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [
      2,
      {
        "maximum": 3
      }
    ],
    "react/jsx-no-bind": [
      2,
      {
        "allowArrowFunctions": false,
        "allowBind": false,
        "ignoreRefs": true
      }
    ],
    "react/jsx-no-comment-textnodes": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-target-blank": 2,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-space-before-closing": [
      2,
      "always"
    ],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 0,
    "react/no-danger": 2,
    "react/no-danger-with-children": 2,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-find-dom-node": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 2,
    "react/no-set-state": 2,
    "react/no-string-refs": 2,
    "react/no-unknown-property": 2,
    "react/no-unused-prop-types": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-render-return": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2,
    "react/sort-prop-types": 2,
    "react/style-prop-object": 2,
    "require-jsdoc": 0,
    "require-yield": 2,
    "semi": [
      2,
      "always"
    ],
    "semi-spacing": [
      2,
      {
        "after": true,
        "before": false
      }
    ],
    "sort-keys": [
      2,
      "asc",
      {
        "caseSensitive": false,
        "natural": true
      }
    ],
    "sort-vars": 2,
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      2,
      "always"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": [
      2,
      {
        "nonwords": false,
        "words": true
      }
    ],
    "spaced-comment": [
      2,
      "always"
    ],
    "strict": [
      2,
      "never"
    ],
    "symbol-description": 2,
    "unicode-bom": [
      2,
      "never"
    ],
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [
      2,
      "inside"
    ],
    "wrap-regex": 0,
    "yoda": 0
  },
  "settings": {
    "import/extensions": [
      ".js"
    ],
    "import/ignore": [
      "node_modules"
    ]
  }
};
