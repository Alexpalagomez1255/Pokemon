const { DataTypes, NUMBER } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('types', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            unique: true,
        }
    });
}