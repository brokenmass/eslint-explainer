# ESLint Explainer

ESLint explainer is a tool to quickly display the current project [eslint](https://github.com/eslint/eslint) rules and their explanation

## Installation and Usage

Install the package globally using npm:

```
$ npm install -g eslint-explainer
```

After that, you can run ESLint on any project ( eslint and all the config need to be installed locally )

Simply run, in the project root folder :
```
$ eslint-explainer
```

Example output (for the [webpack](https://github.com/webpack/webpack) project):
```javascript
{
  "strict": 0,                       // require or disallow strict mode directives [AUTOFIX]
  "camelcase": 0,                    // enforce camelcase naming convention
  "curly": 0,                        // enforce consistent brace style for all control statements [AUTOFIX]
  "indent": [                        // enforce consistent indentation [AUTOFIX]
    2,
    "tab",
    {
      "SwitchCase": 1
    }
  ],
  "eol-last": 1,                     // require or disallow newline at the end of files [AUTOFIX]
  "no-shadow": 0,                    // disallow variable declarations from shadowing variables declared in the outer scope
  "no-redeclare": 2,                 // disallow variable redeclaration [RECOMMENDED]
  "no-extra-bind": 1,                // disallow unnecessary calls to .bind() [AUTOFIX]
  "no-empty": 0,                     // disallow empty block statements [RECOMMENDED]
  "no-process-exit": 1,              // disallow the use of process.exit()
  "no-underscore-dangle": 0,         // disallow dangling underscores in identifiers
  "no-use-before-define": 0,         // disallow the use of variables before they are defined
  "no-undef": 2,                     // disallow the use of undeclared variables unless mentioned in /*global */ comments [RECOMMENDED]
  "no-unused-vars": 0,               // disallow unused variables [RECOMMENDED]
  "consistent-return": 0,            // require return statements to either always or never specify values
  "no-inner-declarations": 1,        // disallow variable or function declarations in nested blocks [RECOMMENDED]
  "no-loop-func": 1,                 // disallow function declarations and expressions inside loop statements
  "space-before-function-paren": [   // enforce consistent spacing before function definition opening parenthesis [AUTOFIX]
    2,
    "never"
  ]
}
```

You can additionally specify a specific file (in case of multiple, nested, eslintrc config file in the same project)

```
$ eslint-explainer <filename>
```
