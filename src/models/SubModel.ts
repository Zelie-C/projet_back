import { DataTypes, Sequelize } from "sequelize";

export const SubModel  = (sequelize: Sequelize) => {
    return sequelize.define('sub', {
        name: DataTypes.STRING,
        avatar: DataTypes.STRING,
        experience: DataTypes.STRING
    });
}