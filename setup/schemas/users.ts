const fabric = function(sequelize, DataTypes) { 
    const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING,
        field: 'firstname'
    },
    lastname: {
        type: DataTypes.STRING,
        field: 'lastname'
    },
    username: {
        type: DataTypes.STRING,
        field: 'username',
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        field: 'password',
        allowNull: false
    }
});

    return User;
};

export = fabric;
