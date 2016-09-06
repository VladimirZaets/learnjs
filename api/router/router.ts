import express  = require('express');
import { users } from 'api/users';

let router = express.Router();

router.route('/Users')
    .get((req:any, res:any) => {
    users.get(req, res);
});

export { router as router }
