var database = require('./database'),
    models = {};

    models.user = require('./Schemas/user');

    models.user.sync({force:true});
