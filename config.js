System.config({
  "transpiler": "babel",
  "paths": {
    "*": "src/js/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel@4.7.13"
  }
});

