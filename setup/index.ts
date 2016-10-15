const fs = require("fs");
const path = require("path");
const schemasPath = path.join(__dirname, 'schemas');
import { database } from 'setup/database';

const models = {};
let model: Object;
let modelName: string;

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
export { models };