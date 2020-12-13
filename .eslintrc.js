export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "settings": {
        "react": {
          "version": "detect"
        }
      },
    "ignorePatterns": ["*.config.js"],
    "rules": {
         // Place to specify ESLint rules.
         // Can be used to overwrite rules specified from the extended configs
         // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
};
