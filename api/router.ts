import express = require('express');
const fs = require("fs"),
  path = require("path"),
  apiRoutersPath = path.join(__dirname, 'routes'),
  router = express.Router();
let routeName,
  setRoutes;

fs
  .readdirSync(apiRoutersPath)
  .filter(function(file) {
     return (file.indexOf(".ts") === -1);
  })
  .forEach(function(file) {
    routeName = file.replace(".js", "");
    setRoutes = require(path.join(apiRoutersPath, routeName));
    setRoutes(router);
  });

export { router as router }
