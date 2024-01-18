import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "..";

export const authRouter = Router();

authRouter.post("/local/register", async (req, res) => {

const { username, password, email } = req.body;
    const userWithEmail = await User.findOne({ where: { email } });
    if (userWithEmail) {
        res.status(400).json("Email already exists");
    }
    else {
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS!));
        const newUser = await User.create({ username, password: hashedPassword, email });
        delete newUser.dataValues.password;
        res.json(newUser);
    }
});

authRouter.post("/local", async (req, res) => {
    const { identifier, password } = req.body;
    const userWithEmail = await User.findOne({ where: { email: identifier } });
    if (!userWithEmail) {
        res.status(400).json("Email or Password is incorrect");
    }
    else {
        const isPasswordCorrect = await bcrypt.compare(password, userWithEmail.dataValues.password);
        if (isPasswordCorrect) {
            delete userWithEmail.dataValues.password;
            const token = jwt.sign(userWithEmail.dataValues, process.env.JWT_SECRET!);
            res.json({
                token,
                ...userWithEmail.dataValues
            });
        }
        else {
            res.status(400).json("Email or Password is incorrect");
        }
    }
})
