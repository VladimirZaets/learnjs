const fs = require("fs");
const path = require("path");
import express = require('express');

const apiRoutersPath = path.join(__dirname, 'routes');
const router = express.Router();
let routeName: string;
let setRoutes: Object;

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
