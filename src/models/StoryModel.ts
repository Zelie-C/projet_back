import { DataTypes, Sequelize } from "sequelize";

export const StoryModel  = (sequelize: Sequelize) => {
    return sequelize.define('story', {
        title: DataTypes.STRING,
        texte: DataTypes.STRING,
        image_path: DataTypes.STRING
    });
}