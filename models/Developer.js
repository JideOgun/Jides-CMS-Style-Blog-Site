const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
// Creating the developer model
class Developer extends Model {
    // setting up method to run on instane data(per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}


// creating fields and columns for Developer model
Developer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
       hooks: {
           //setting up beforecreate lifecycle hook functionality
           async beforeCreate(newDevData) {
               newDevData.password = await bcrypt.hash(newDevData.password, 10);
               return newDevData;
           },
           async beforeUpdate(updatedDevData) {
               updatedDevData.password = await bcrypt.hash(updatedDevData.password);
               return updatedDevData;
           }

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'developer'
    }
);

module.exports = Developer;