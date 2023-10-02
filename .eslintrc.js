module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "rules": {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-magic-numbers": ["error", {
        "ignore": [0, 1],
        "ignoreArrayIndexes": true,
        "ignoreDefaultValues": true
      }]
    }
}
