import "dotenv/config";
import express from 'express'
import { Sequelize } from 'sequelize';
import cors from 'cors'
import bodyParser from 'body-parser'

import { UserModel } from './models/UserModel'
import { SubModel } from './models/SubModel'
import { InscriptionModel } from './models/InscriptionModel'
import { MoodModel } from './models/MoodModel'
import { StoryModel } from './models/StoryModel'
import { BookModel } from './models/BookModel'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db/database.sqlite'
});

export const User = UserModel(sequelize);
export const Sub = SubModel(sequelize);
export const Inscription = InscriptionModel(sequelize);
export const Mood = MoodModel(sequelize);
export const Story = StoryModel(sequelize);
export const Book = BookModel(sequelize);

User.hasMany(Sub, {foreignKey: 'user_id'})
Sub.belongsTo(User, {foreignKey: 'user_id'})

User.hasMany(Inscription, {foreignKey: 'user_id'})
Inscription.belongsTo(User, {foreignKey: 'user_id'})

Sub.belongsToMany(Mood, { through: 'daily_mood', foreignKey: 'sub_id'});
Mood.belongsToMany(Sub, { through: 'daily_mood', foreignKey: 'mood_id'});

Sub.hasMany(Story, {foreignKey: 'sub_id'})
Story.belongsTo(Sub, {foreignKey: 'sub_id'})

Sub.hasMany(Book, {foreignKey: 'sub_id'})
Book.belongsTo(Sub, {foreignKey: 'sub_id'})

sequelize.sync({force: true})
// sequelize.sync()

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = parseInt(process.env.PORT as string);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})