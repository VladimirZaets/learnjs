import { User } from 'setup/schemas/user';

let users = {
    get: (req:any, res:any) => {
        let allUsers = usersModel.all().then(
           (data:any) => {
               console.log(data);
                res.json(data || {no : "user"});
            }
        );
    }
};

export { users as users }