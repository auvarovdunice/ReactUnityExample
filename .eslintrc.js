module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
    "react-hooks/rules-of-hooks": "error"
  },
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "plugins": [
    // ...
    "react-hooks"
  ],
};
