module.exports = {
  "import/no-unresolved": {
    "description": "Ensure imports point to a file/module that can be resolved."
  },
  "import/named": {
    "description": "Ensure named imports correspond to a named export in the remote file."
  },
  "import/default": {
    "description": "Ensure a default export is present, given a default import."
  },
  "import/namespace": {
    "description": "Ensure imported namespaces contain dereferenced properties as they are dereferenced."
  },
  "import/no-restricted-paths": {
    "description": "Restrict which files can be imported in a given folder"
  },
  "import/no-absolute-path": {
    "description": "Forbid import of modules using absolute paths"
  },
  "import/no-dynamic-require": {
    "description": "Forbid require() calls with expressions"
  },
  "import/no-internal-modules": {
    "description": "Prevent importing the submodules of other modules"
  },
  "import/no-webpack-loader-syntax": {
    "description": "Forbid Webpack loader syntax in imports"
  },
  "import/export": {
    "description": "Report any invalid exports, i.e. re-export of the same name"
  },
  "import/no-named-as-default": {
    "description": "Report use of exported name as identifier of default export"
  },
  "import/no-named-as-default-member": {
    "description": "Report use of exported name as property of default export"
  },
  "import/no-deprecated": {
    "description": "Report imported names marked with @deprecated documentation tag"
  },
  "import/no-extraneous-dependencies": {
    "description": "Forbid the use of extraneous packages"
  },
  "import/no-mutable-exports": {
    "description": "Forbid the use of mutable exports with var or let."
  },
  "import/unambiguous": {
    "description": "Report potentially ambiguous parse goal(script vs. module)"
  },
  "import/no-commonjs": {
    "description": "Report CommonJS require calls and module.exports or exports.*."
  },
  "import/no-amd": {
    "description": "Report AMD require and define calls."
  },
  "import/no-nodejs-modules": {
    "description": "No Node.js builtin modules."
  },
  "import/first": {
    "description": "Ensure all imports appear before other statements"
  },
  "import/no-duplicates": {
    "description": "Report repeated import of the same module in multiple places"
  },
  "import/no-namespace": {
    "description": "Report namespace imports"
  },
  "import/extensions": {
    "description": "Ensure consistent use of file extension within the import path"
  },
  "import/order": {
    "description": "Enforce a convention in module import order"
  },
  "import/newline-after-import": {
    "description": "Enforce a newline after import statements"
  },
  "import/prefer-default-export": {
    "description": "Prefer a default export if module exports a single name"
  },
  "import/max-dependencies": {
    "description": "Limit the maximum number of dependencies a module can have."
  },
  "import/no-unassigned-import": {
    "description": "Forbid unassigned imports."
  }
};