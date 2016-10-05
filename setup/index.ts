import { database } from 'setup/database';
const fs = require("fs"),
  path = require("path"),
  schemasPath = path.join(__dirname, 'schemas'),
  models = {};
let model,
  modelName;

fs
  .readdirSync(schemasPath)
  .filter(function(file) {
     return (file.indexOf(".ts") === -1);
  })
  .forEach(function(file) {
    model = database.import(path.join(schemasPath, file)),
    modelName = file.replace(".js", "");
    models[modelName] = model;
  });

database.sync().then(function() {
    console.log('Db synced');
  }, function (err) { 
    console.log('An error occurred while syncing database', err);
  });

//export models
module.exports.models = models;