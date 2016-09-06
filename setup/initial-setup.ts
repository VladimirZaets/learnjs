const fs = require("fs");
const path = require("path");
import { database } from 'setup/database';
const schemasPath = path.join(__dirname, 'schemas');

fs
  .readdirSync(schemasPath)
  .filter(function(file) {
     return (file.indexOf(".ts") === -1);
  })
  .forEach(function(file) {
    var model = database.import(path.join(schemasPath, file));
  });

/*Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    repository[modelName].associate(db);
  }
});
*/
database.sync({force:true}).then(function(err) {
    console.log('Db synced');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
  });//, match: /_test$/