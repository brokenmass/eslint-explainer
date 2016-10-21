module.exports = {
  "babel/generator-star-spacing": {
    "description": "Handles async/await functions correctly"
  },
  "babel/new-cap": {
    "description": "Ignores capitalized decorators (@Decorator)"
  },
  "babel/array-bracket-spacing": {
    "description": "Handles destructuring arrays with flow type in function parameters",
    "fixable": true
  },
  "babel/object-curly-spacing": {
    "description": "doesn't complain about export x from \"mod\"; or export * as x from \"mod\";",
    "fixable": true
  },
  "babel/object-shorthand": {
    "description": "doesn't fail when using object spread (...obj)"
  },
  "babel/arrow-parens": {
    "description": "Handles async functions correctly",
    "fixable": true
  },
  "babel/no-await-in-loop": {
    "description": "guard against awaiting async functions inside of a loop",
    "fixable": true
  },
  "babel/flow-object-type": {
    "description": "Require a particular separator between properties in Flow object types.",
    "fixable": true
  },
  "babel/func-params-comma-dangle": {
    "description": "Require or forbid trailing commas for function paramater lists.",
    "fixable": true
  }
};