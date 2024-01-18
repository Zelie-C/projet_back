import { DataTypes, Sequelize } from "sequelize";

export const BookModel  = (sequelize: Sequelize) => {
    return sequelize.define('story', {
        title: DataTypes.STRING,
        file_path: DataTypes.STRING
    });
}