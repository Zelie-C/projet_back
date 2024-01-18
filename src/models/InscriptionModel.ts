import { DataTypes, Sequelize } from "sequelize";

export const InscriptionModel  = (sequelize: Sequelize) => {
    return sequelize.define('inscription', {
        date_inscription: DataTypes.DATE,
        date_renewal: DataTypes.DATE
    });
}