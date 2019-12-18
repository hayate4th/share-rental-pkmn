module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off"
  }
}