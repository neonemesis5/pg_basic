module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb-base", "eslint:recommended", "prettier"],
    // parserOptions: {
    //     ecmaVersion: 12,
    //   },
    // "plugins": ["import", "simple-import-sort", "prettier"],
    // "overrides": [
    //     {
    //         "env": {
    //             "node": true
    //         },
    //         "files": [
    //             ".eslintrc.{js,cjs}"
    //         ],
    //         "parserOptions": {
    //             "sourceType": "script"
    //         }
    //     }
    // ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules":{
        "prettier/prettier": ["warn"],
        "semi": ["error", "always"],
        "quotes": ["warn", "double"],
        "func-names": ["warn", "as-needed"],
        "no-use-before-define": ["error"],
        "no-confusing-arrow": "off",
        "object-curly-newline": "off",
        "prefer-const": "warn",
        "no-shadow": "warn",
        "no-mixed-spaces-and-tabs": ["error"],
        "block-spacing": "error",
        "arrow-spacing": "error",
        "no-restricted-syntax": "warn",
        "no-plusplus": "warn",
        "no-lonely-if": "warn",
        "no-console": "error",
        "camelcase": "warn",
        "import/no-dynamic-require": "warn",
        "global-require": "warn",
        "comma-dangle": "off",
        "keyword-spacing": ["error", { before: true, after: true }],
        "implicit-arrow-linebreak": "off",
        "no-nested-ternary": "off",
        "operator-linebreak": "off",
        "object-curly-spacing": ["error", "always"],
        "key-spacing": ["warn", { afterColon: true }],
      },
      overrides: [
        {
          files: ["__test__/*.test.js"],
          rules: {
            "no-undef": "off",
            "no-template-curly-in-string": "off",
            quotes: "off",
          },
        },
      ],
}
