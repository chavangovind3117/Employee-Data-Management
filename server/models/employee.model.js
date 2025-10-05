const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const e = require("cors");

const Employee = sequelize.define("Employee", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,     
        validate: {
        isEmail: true // must be a valid email format
        }
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Employee;