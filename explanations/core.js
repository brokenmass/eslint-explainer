module.exports = {
  "no-cond-assign": {
    "description": "disallow assignment operators in conditional expressions",
    "recommended": true
  },
  "no-console": {
    "description": "disallow the use of console",
    "recommended": true
  },
  "no-constant-condition": {
    "description": "disallow constant expressions in conditions",
    "recommended": true
  },
  "no-control-regex": {
    "description": "disallow control characters in regular expressions",
    "recommended": true
  },
  "no-debugger": {
    "description": "disallow the use of debugger",
    "recommended": true
  },
  "no-dupe-args": {
    "description": "disallow duplicate arguments in function definitions",
    "recommended": true
  },
  "no-dupe-keys": {
    "description": "disallow duplicate keys in object literals",
    "recommended": true
  },
  "no-duplicate-case": {
    "description": "disallow duplicate case labels",
    "recommended": true
  },
  "no-empty-character-class": {
    "description": "disallow empty character classes in regular expressions",
    "recommended": true
  },
  "no-empty": {
    "description": "disallow empty block statements",
    "recommended": true
  },
  "no-ex-assign": {
    "description": "disallow reassigning exceptions in catch clauses",
    "recommended": true
  },
  "no-extra-boolean-cast": {
    "description": "disallow unnecessary boolean casts",
    "recommended": true
  },
  "no-extra-parens": {
    "description": "disallow unnecessary parentheses",
    "fixable": true,
  },
  "no-extra-semi": {
    "description": "disallow unnecessary semicolons",
    "fixable": true,
    "recommended": true
  },
  "no-func-assign": {
    "description": "disallow reassigning function declarations",
    "recommended": true
  },
  "no-inner-declarations": {
    "description": "disallow variable or function declarations in nested blocks",
    "recommended": true
  },
  "no-invalid-regexp": {
    "description": "disallow invalid regular expression strings in RegExp constructors",
    "recommended": true
  },
  "no-irregular-whitespace": {
    "description": "disallow irregular whitespace outside of strings and comments",
    "recommended": true
  },
  "no-obj-calls": {
    "description": "disallow calling global object properties as functions",
    "recommended": true
  },
  "no-prototype-builtins": {
    "description": "disallow calling some Object.prototype methods directly on objects",
  },
  "no-regex-spaces": {
    "description": "disallow multiple spaces in regular expressions",
    "fixable": true,
    "recommended": true
  },
  "no-sparse-arrays": {
    "description": "disallow sparse arrays",
    "recommended": true
  },
  "no-template-curly-in-string": {
    "description": "disallow template literal placeholder syntax in regular strings",
  },
  "no-unexpected-multiline": {
    "description": "disallow confusing multiline expressions",
    "recommended": true
  },
  "no-unreachable": {
    "description": "disallow unreachable code after return, throw, continue, and break statements",
    "recommended": true
  },
  "no-unsafe-finally": {
    "description": "disallow control flow statements in finally blocks",
    "recommended": true
  },
  "no-unsafe-negation": {
    "description": "disallow negating the left operand of relational operators",
    "fixable": true,
  },
  "use-isnan": {
    "description": "require calls to isNaN() when checking for NaN",
    "recommended": true
  },
  "valid-jsdoc": {
    "description": "enforce valid JSDoc comments",
  },
  "valid-typeof": {
    "description": "enforce comparing typeof expressions against valid strings",
    "recommended": true
  },
  "accessor-pairs": {
    "description": "enforce getter and setter pairs in objects",
  },
  "array-callback-return": {
    "description": "enforce return statements in callbacks of array methods",
  },
  "block-scoped-var": {
    "description": "enforce the use of variables within the scope they are defined",
  },
  "class-methods-use-this": {
    "description": "enforce that class methods utilize this",
  },
  "complexity": {
    "description": "enforce a maximum cyclomatic complexity allowed in a program",
  },
  "consistent-return": {
    "description": "require return statements to either always or never specify values",
  },
  "curly": {
    "description": "enforce consistent brace style for all control statements",
    "fixable": true,
  },
  "default-case": {
    "description": "require default cases in switch statements",
  },
  "dot-location": {
    "description": "enforce consistent newlines before and after dots",
    "fixable": true,
  },
  "dot-notation": {
    "description": "enforce dot notation whenever possible",
    "fixable": true,
  },
  "eqeqeq": {
    "description": "require the use of === and !==",
  },
  "guard-for-in": {
    "description": "require for-in loops to include an if statement",
  },
  "no-alert": {
    "description": "disallow the use of alert, confirm, and prompt",
  },
  "no-caller": {
    "description": "disallow the use of arguments.caller or arguments.callee",
  },
  "no-case-declarations": {
    "description": "disallow lexical declarations in case clauses",
    "recommended": true
  },
  "no-div-regex": {
    "description": "disallow division operators explicitly at the beginning of regular expressions",
  },
  "no-else-return": {
    "description": "disallow else blocks after return statements in if statements",
  },
  "no-empty-function": {
    "description": "disallow empty functions",
  },
  "no-empty-pattern": {
    "description": "disallow empty destructuring patterns",
    "recommended": true
  },
  "no-eq-null": {
    "description": "disallow null comparisons without type-checking operators",
  },
  "no-eval": {
    "description": "disallow the use of eval()",
  },
  "no-extend-native": {
    "description": "disallow extending native types",
  },
  "no-extra-bind": {
    "description": "disallow unnecessary calls to .bind()",
    "fixable": true,
  },
  "no-extra-label": {
    "description": "disallow unnecessary labels",
  },
  "no-fallthrough": {
    "description": "disallow fallthrough of case statements",
    "recommended": true
  },
  "no-floating-decimal": {
    "description": "disallow leading or trailing decimal points in numeric literals",
    "fixable": true,
  },
  "no-global-assign": {
    "description": "disallow assignments to native objects or read-only global variables",
  },
  "no-implicit-coercion": {
    "description": "disallow shorthand type conversions",
    "fixable": true,
  },
  "no-implicit-globals": {
    "description": "disallow variable and function declarations in the global scope",
  },
  "no-implied-eval": {
    "description": "disallow the use of eval()-like methods",
  },
  "no-invalid-this": {
    "description": "disallow this keywords outside of classes or class-like objects",
  },
  "no-iterator": {
    "description": "disallow the use of the __iterator__ property",
  },
  "no-labels": {
    "description": "disallow labeled statements",
  },
  "no-lone-blocks": {
    "description": "disallow unnecessary nested blocks",
  },
  "no-loop-func": {
    "description": "disallow function declarations and expressions inside loop statements",
  },
  "no-magic-numbers": {
    "description": "disallow magic numbers",
  },
  "no-multi-spaces": {
    "description": "disallow multiple spaces",
    "fixable": true,
  },
  "no-multi-str": {
    "description": "disallow multiline strings",
  },
  "no-new-func": {
    "description": "disallow new operators with the Function object",
  },
  "no-new-wrappers": {
    "description": "disallow new operators with the String, Number, and Boolean objects",
  },
  "no-new": {
    "description": "disallow new operators outside of assignments or comparisons",
  },
  "no-octal-escape": {
    "description": "disallow octal escape sequences in string literals",
  },
  "no-octal": {
    "description": "disallow octal literals",
    "recommended": true
  },
  "no-param-reassign": {
    "description": "disallow reassigning function parameters",
  },
  "no-proto": {
    "description": "disallow the use of the __proto__ property",
  },
  "no-redeclare": {
    "description": "disallow variable redeclaration",
    "recommended": true
  },
  "no-restricted-properties": {
    "description": "disallow certain properties on certain objects",
  },
  "no-return-assign": {
    "description": "disallow assignment operators in return statements",
  },
  "no-script-url": {
    "description": "disallow javascript: urls",
  },
  "no-self-assign": {
    "description": "disallow assignments where both sides are exactly the same",
    "recommended": true
  },
  "no-self-compare": {
    "description": "disallow comparisons where both sides are exactly the same",
  },
  "no-sequences": {
    "description": "disallow comma operators",
  },
  "no-throw-literal": {
    "description": "disallow throwing literals as exceptions",
  },
  "no-unmodified-loop-condition": {
    "description": "disallow unmodified loop conditions",
  },
  "no-unused-expressions": {
    "description": "disallow unused expressions",
  },
  "no-unused-labels": {
    "description": "disallow unused labels",
    "recommended": true
  },
  "no-useless-call": {
    "description": "disallow unnecessary calls to .call() and .apply()",
  },
  "no-useless-concat": {
    "description": "disallow unnecessary concatenation of literals or template literals",
  },
  "no-useless-escape": {
    "description": "disallow unnecessary escape characters",
  },
  "no-void": {
    "description": "disallow void operators",
  },
  "no-warning-comments": {
    "description": "disallow specified warning terms in comments",
  },
  "no-with": {
    "description": "disallow with statements",
  },
  "radix": {
    "description": "enforce the consistent use of the radix argument when using parseInt()",
  },
  "vars-on-top": {
    "description": "require var declarations be placed at the top of their containing scope",
  },
  "wrap-iife": {
    "description": "require parentheses around immediate function invocations",
    "fixable": true,
  },
  "yoda": {
    "description": "require or disallow “Yoda” conditions",
    "fixable": true,
  },
  "strict": {
    "description": "require or disallow strict mode directives",
    "fixable": true,
  },
  "init-declarations": {
    "description": "require or disallow initialization in variable declarations",
  },
  "no-catch-shadow": {
    "description": "disallow catch clause parameters from shadowing variables in the outer scope",
  },
  "no-delete-var": {
    "description": "disallow deleting variables",
    "recommended": true
  },
  "no-label-var": {
    "description": "disallow labels that share a name with a variable",
  },
  "no-restricted-globals": {
    "description": "disallow specified global variables",
  },
  "no-shadow-restricted-names": {
    "description": "disallow identifiers from shadowing restricted names",
  },
  "no-shadow": {
    "description": "disallow variable declarations from shadowing variables declared in the outer scope",
  },
  "no-undef-init": {
    "description": "disallow initializing variables to undefined",
    "fixable": true,
  },
  "no-undef": {
    "description": "disallow the use of undeclared variables unless mentioned in /*global */ comments",
    "recommended": true
  },
  "no-undefined": {
    "description": "disallow the use of undefined as an identifier",
  },
  "no-unused-vars": {
    "description": "disallow unused variables",
    "recommended": true
  },
  "no-use-before-define": {
    "description": "disallow the use of variables before they are defined",
  },
  "callback-return": {
    "description": "require return statements after callbacks",
  },
  "global-require": {
    "description": "require require() calls to be placed at top-level module scope",
  },
  "handle-callback-err": {
    "description": "require error handling in callbacks",
  },
  "no-mixed-requires": {
    "description": "disallow require calls to be mixed with regular variable declarations",
  },
  "no-new-require": {
    "description": "disallow new operators with calls to require",
  },
  "no-path-concat": {
    "description": "disallow string concatenation with __dirname and __filename",
  },
  "no-process-env": {
    "description": "disallow the use of process.env",
  },
  "no-process-exit": {
    "description": "disallow the use of process.exit()",
  },
  "no-restricted-modules": {
    "description": "disallow specified modules when loaded by require",
  },
  "no-sync": {
    "description": "disallow synchronous methods",
  },
  "array-bracket-spacing": {
    "description": "enforce consistent spacing inside array brackets",
    "fixable": true,
  },
  "block-spacing": {
    "description": "enforce consistent spacing inside single-line blocks",
    "fixable": true,
  },
  "brace-style": {
    "description": "enforce consistent brace style for blocks",
  },
  "camelcase": {
    "description": "enforce camelcase naming convention",
  },
  "comma-dangle": {
    "description": "require or disallow trailing commas",
    "fixable": true,
  },
  "comma-spacing": {
    "description": "enforce consistent spacing before and after commas",
    "fixable": true,
  },
  "comma-style": {
    "description": "enforce consistent comma style",
    "fixable": true,
  },
  "computed-property-spacing": {
    "description": "enforce consistent spacing inside computed property brackets",
    "fixable": true,
  },
  "consistent-this": {
    "description": "enforce consistent naming when capturing the current execution context",
  },
  "eol-last": {
    "description": "require or disallow newline at the end of files",
    "fixable": true,
  },
  "func-call-spacing": {
    "description": "require or disallow spacing between function identifiers and their invocations",
    "fixable": true,
  },
  "func-name-matching": {
    "description": "require function names to match the name of the variable or property to which they are assigned",
  },
  "func-names": {
    "description": "require or disallow named function expressions",
  },
  "func-style": {
    "description": "enforce the consistent use of either function declarations or expressions",
  },
  "id-blacklist": {
    "description": "disallow specified identifiers",
  },
  "id-length": {
    "description": "enforce minimum and maximum identifier lengths",
  },
  "id-match": {
    "description": "require identifiers to match a specified regular expression",
  },
  "indent": {
    "description": "enforce consistent indentation",
    "fixable": true,
  },
  "jsx-quotes": {
    "description": "enforce the consistent use of either double or single quotes in JSX attributes",
    "fixable": true,
  },
  "key-spacing": {
    "description": "enforce consistent spacing between keys and values in object literal properties",
    "fixable": true,
  },
  "keyword-spacing": {
    "description": "enforce consistent spacing before and after keywords",
    "fixable": true,
  },
  "line-comment-position": {
    "description": "enforce position of line comments",
  },
  "linebreak-style": {
    "description": "enforce consistent linebreak style",
    "fixable": true,
  },
  "lines-around-comment": {
    "description": "require empty lines around comments",
    "fixable": true,
  },
  "lines-around-directive": {
    "description": "require or disallow newlines around directives",
    "fixable": true,
  },
  "max-depth": {
    "description": "enforce a maximum depth that blocks can be nested",
  },
  "max-len": {
    "description": "enforce a maximum line length",
  },
  "max-lines": {
    "description": "enforce a maximum number of lines per file",
  },
  "max-nested-callbacks": {
    "description": "enforce a maximum depth that callbacks can be nested",
  },
  "max-params": {
    "description": "enforce a maximum number of parameters in function definitions",
  },
  "max-statements-per-line": {
    "description": "enforce a maximum number of statements allowed per line",
  },
  "max-statements": {
    "description": "enforce a maximum number of statements allowed in function blocks",
  },
  "multiline-ternary": {
    "description": "enforce newlines between operands of ternary expressions",
  },
  "new-cap": {
    "description": "require constructor names to begin with a capital letter",
  },
  "new-parens": {
    "description": "require parentheses when invoking a constructor with no arguments",
    "fixable": true,
  },
  "newline-after-var": {
    "description": "require or disallow an empty line after variable declarations",
  },
  "newline-before-return": {
    "description": "require an empty line before return statements",
    "fixable": true,
  },
  "newline-per-chained-call": {
    "description": "require a newline after each call in a method chain",
  },
  "no-array-constructor": {
    "description": "disallow Array constructors",
  },
  "no-bitwise": {
    "description": "disallow bitwise operators",
  },
  "no-continue": {
    "description": "disallow continue statements",
  },
  "no-inline-comments": {
    "description": "disallow inline comments after code",
  },
  "no-lonely-if": {
    "description": "disallow if statements as the only statement in else blocks",
    "fixable": true,
  },
  "no-mixed-operators": {
    "description": "disallow mixed binary operators",
  },
  "no-mixed-spaces-and-tabs": {
    "description": "disallow mixed spaces and tabs for indentation",
    "recommended": true
  },
  "no-multiple-empty-lines": {
    "description": "disallow multiple empty lines",
    "fixable": true,
  },
  "no-negated-condition": {
    "description": "disallow negated conditions",
  },
  "no-nested-ternary": {
    "description": "disallow nested ternary expressions",
  },
  "no-new-object": {
    "description": "disallow Object constructors",
  },
  "no-plusplus": {
    "description": "disallow the unary operators ++ and --",
  },
  "no-restricted-syntax": {
    "description": "disallow specified syntax",
  },
  "no-tabs": {
    "description": "disallow tabs in file",
  },
  "no-ternary": {
    "description": "disallow ternary operators",
  },
  "no-trailing-spaces": {
    "description": "disallow trailing whitespace at the end of lines",
    "fixable": true,
  },
  "no-underscore-dangle": {
    "description": "disallow dangling underscores in identifiers",
  },
  "no-unneeded-ternary": {
    "description": "disallow ternary operators when simpler alternatives exist",
  },
  "no-whitespace-before-property": {
    "description": "disallow whitespace before properties",
    "fixable": true,
  },
  "object-curly-newline": {
    "description": "enforce consistent line breaks inside braces",
    "fixable": true,
  },
  "object-curly-spacing": {
    "description": "enforce consistent spacing inside braces",
    "fixable": true,
  },
  "object-property-newline": {
    "description": "enforce placing object properties on separate lines",
  },
  "one-var-declaration-per-line": {
    "description": "require or disallow newlines around variable declarations",
    "fixable": true,
  },
  "one-var": {
    "description": "enforce variables to be declared either together or separately in functions",
  },
  "operator-assignment": {
    "description": "require or disallow assignment operator shorthand where possible",
  },
  "operator-linebreak": {
    "description": "enforce consistent linebreak style for operators",
  },
  "padded-blocks": {
    "description": "require or disallow padding within blocks",
    "fixable": true,
  },
  "quote-props": {
    "description": "require quotes around object literal property names",
    "fixable": true,
  },
  "quotes": {
    "description": "enforce the consistent use of either backticks, double, or single quotes",
    "fixable": true,
  },
  "require-jsdoc": {
    "description": "require JSDoc comments",
  },
  "semi-spacing": {
    "description": "enforce consistent spacing before and after semicolons",
    "fixable": true,
  },
  "semi": {
    "description": "require or disallow semicolons instead of ASI",
    "fixable": true,
  },
  "sort-keys": {
    "description": "require object keys to be sorted",
  },
  "sort-vars": {
    "description": "require variables within the same declaration block to be sorted",
  },
  "space-before-blocks": {
    "description": "enforce consistent spacing before blocks",
    "fixable": true,
  },
  "space-before-function-paren": {
    "description": "enforce consistent spacing before function definition opening parenthesis",
    "fixable": true,
  },
  "space-in-parens": {
    "description": "enforce consistent spacing inside parentheses",
    "fixable": true,
  },
  "space-infix-ops": {
    "description": "require spacing around infix operators",
    "fixable": true,
  },
  "space-unary-ops": {
    "description": "enforce consistent spacing before or after unary operators",
    "fixable": true,
  },
  "spaced-comment": {
    "description": "enforce consistent spacing after the // or /* in a comment",
    "fixable": true,
  },
  "unicode-bom": {
    "description": "require or disallow Unicode byte order mark (BOM)",
    "fixable": true,
  },
  "wrap-regex": {
    "description": "require parenthesis around regex literals",
    "fixable": true,
  },
  "arrow-body-style": {
    "description": "require braces around arrow function bodies",
  },
  "arrow-parens": {
    "description": "require parentheses around arrow function arguments",
    "fixable": true,
  },
  "arrow-spacing": {
    "description": "enforce consistent spacing before and after the arrow in arrow functions",
    "fixable": true,
  },
  "constructor-super": {
    "description": "require super() calls in constructors",
    "recommended": true
  },
  "generator-star-spacing": {
    "description": "enforce consistent spacing around * operators in generator functions",
    "fixable": true,
  },
  "no-class-assign": {
    "description": "disallow reassigning class members",
    "recommended": true
  },
  "no-confusing-arrow": {
    "description": "disallow arrow functions where they could be confused with comparisons",
  },
  "no-const-assign": {
    "description": "disallow reassigning const variables",
    "recommended": true
  },
  "no-dupe-class-members": {
    "description": "disallow duplicate class members",
    "recommended": true
  },
  "no-duplicate-imports": {
    "description": "disallow duplicate module imports",
  },
  "no-new-symbol": {
    "description": "disallow new operators with the Symbol object",
    "recommended": true
  },
  "no-restricted-imports": {
    "description": "disallow specified modules when loaded by import",
  },
  "no-this-before-super": {
    "description": "disallow this/super before calling super() in constructors",
    "recommended": true
  },
  "no-useless-computed-key": {
    "description": "disallow unnecessary computed property keys in object literals",
    "fixable": true,
  },
  "no-useless-constructor": {
    "description": "disallow unnecessary constructors",
  },
  "no-useless-rename": {
    "description": "disallow renaming import, export, and destructured assignments to the same name",
    "fixable": true,
  },
  "no-var": {
    "description": "require let or const instead of var",
    "fixable": true,
  },
  "object-shorthand": {
    "description": "require or disallow method and property shorthand syntax for object literals",
    "fixable": true,
  },
  "prefer-arrow-callback": {
    "description": "require arrow functions as callbacks",
    "fixable": true,
  },
  "prefer-const": {
    "description": "require const declarations for variables that are never reassigned after declared",
    "fixable": true,
  },
  "prefer-numeric-literals": {
    "description": "disallow parseInt() in favor of binary, octal, and hexadecimal literals",
    "fixable": true,
  },
  "prefer-reflect": {
    "description": "require Reflect methods where applicable",
  },
  "prefer-rest-params": {
    "description": "require rest parameters instead of arguments",
  },
  "prefer-spread": {
    "description": "require spread operators instead of .apply()",
    "fixable": true,
  },
  "prefer-template": {
    "description": "require template literals instead of string concatenation",
    "fixable": true,
  },
  "require-yield": {
    "description": "require generator functions to contain yield",
    "recommended": true
  },
  "rest-spread-spacing": {
    "description": "enforce spacing between rest and spread operators and their expressions",
    "fixable": true,
  },
  "sort-imports": {
    "description": "enforce sorted import declarations within modules",
  },
  "symbol-description": {
    "description": "require symbol descriptions",
  },
  "template-curly-spacing": {
    "description": "require or disallow spacing around embedded expressions of template strings",
    "fixable": true,
  },
  "yield-star-spacing": {
    "description": "require or disallow spacing around the * in yield* expressions",
    "fixable": true,
  },
  "no-native-reassign": {
    "deprecated": true,
    "replacedBy": "no-global-assign"
  },
  "no-negated-in-lhs": {
    "deprecated": true,
    "replacedBy": "no-unsafe-negation"
  },
  "no-spaced-func": {
    "deprecated": true,
    "replacedBy": "func-call-spacing"
  },
  "generator-star": {
    "removed": true,
    "replacedBy": "generator-star-spacing"
  },
  "global-strict": {
    "removed": true,
    "replacedBy": "strict"
  },
  "no-arrow-condition": {
    "removed": true,
    "replacedBy": "no-confusing-arrow"
  },
  "no-comma-dangle": {
    "removed": true,
    "replacedBy": "comma-dangle"
  },
  "no-empty-class": {
    "removed": true,
    "replacedBy": "no-empty-character-class"
  },
  "no-empty-label": {
    "removed": true,
    "replacedBy": "no-labels"
  },
  "no-extra-strict": {
    "removed": true,
    "replacedBy": "strict"
  },
  "no-reserved-keys": {
    "removed": true,
    "replacedBy": "quote-props"
  },
  "no-space-before-semi": {
    "removed": true,
    "replacedBy": "semi-spacing"
  },
  "no-wrap-func": {
    "removed": true,
    "replacedBy": "no-extra-parens"
  },
  "space-after-function-name": {
    "removed": true,
    "replacedBy": "space-before-function-paren"
  },
  "space-after-keywords": {
    "removed": true,
    "replacedBy": "keyword-spacing"
  },
  "space-before-function-parentheses": {
    "removed": true,
    "replacedBy": "space-before-function-paren"
  },
  "space-before-keywords": {
    "removed": true,
    "replacedBy": "keyword-spacing"
  },
  "space-in-brackets": {
    "removed": true,
    "replacedBy": "object-curly-spacing"
  },
  "space-return-throw-case": {
    "removed": true,
    "replacedBy": "keyword-spacing"
  },
  "space-unary-word-ops": {
    "removed": true,
    "replacedBy": "space-unary-ops"
  },
  "spaced-line-comment": {
    "removed": true,
    "replacedBy": "spaced-comment"
  }
};
