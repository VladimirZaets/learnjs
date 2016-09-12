const fs = require("fs");
const path = require("path");
import { database } from 'setup/database';
const schemasPath = path.join(__dirname, 'schemas');
const models = {};

fs
  .readdirSync(schemasPath)
  .filter(function(file) {
     return (file.indexOf(".ts") === -1);
  })
  .forEach(function(file) {
    var model = database.import(path.join(schemasPath, file)),
    modelName = file.replace(".js", "");
    console.log(modelName);
    models[modelName] = model;
  });

database.sync().then(function() {
    console.log('Db synced');
  }, function (err) { 
    console.log('An error occurred while syncing database', err);
  });

//export models
module.exports.models = models;