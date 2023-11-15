module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:cypress/recommended",
        "eslint:recommended"
      ],
    "plugins": [
        "cypress"
      ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
                // files: ['**/*.*']
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
            "cypress/no-assigning-return-values": "error",
            "cypress/no-unnecessary-waiting": "error",
            "cypress/assertion-before-screenshot": "warn",
            "cypress/no-force": "warn",
            "cypress/no-async-tests": "error",
            "cypress/no-pause": "error"
    }
}
