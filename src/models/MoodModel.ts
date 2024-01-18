import { DataTypes, Sequelize } from "sequelize";

export const MoodModel  = (sequelize: Sequelize) => {
    return sequelize.define('mood', {
        emotion: DataTypes.STRING
    });
}