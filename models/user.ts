import {app} from 'index';
import { crypto } from 'models/crypto';

const users = app.get('models').users;

class User {
    private _password: string;

    set password(rawPassword: string) {
        this._password = crypto.getSHA1(rawPassword + crypto.salt);
    }

    private get password(): string {
        return this._password;
    }

    constructor(userdata: Object) {
        this.firstname = userdata.firstname;
        this.lastname = userdata.lastname;
        this.username = userdata.username;
        this.password = userdata.password;
    }

    create(): Promise {
        return users.create({
            firstname: this.firstname,
            lastname: this.lastname,
            username: this.username,
            password: this.password
        });
    }

    login(): Promise {
        return users.findAll({
            where: {
                username: this.username,
                password: this.password
            }
        });
    }
}

export = User;