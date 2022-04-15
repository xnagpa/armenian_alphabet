module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "ignorePatterns": ["_app.js", "/pages/index.tsx"],
    "rules": {
        "semi": ["error", "never"],
        "react/jsx-props-no-spreading": ["off"],
        "jsx-a11y/click-events-have-key-events": ["off"],
        "jsx-a11y/no-static-element-interactions": ["off"],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    }
}
