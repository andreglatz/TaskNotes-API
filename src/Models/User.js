require('dotenv').config();
const { Model, DataTypes } = require('sequelize');

class User extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            user: DataTypes.STRING,
            password: DataTypes.TEXT
        }, {
            sequelize
        })
    }
}

module.exports = User;