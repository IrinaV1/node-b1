import createHttpError from "http-errors";
import User from "../models/user.js";
import bcrypt from "bcrypt";

export const registerUsers = async (req, res) => {
    const { name, email, password} = req.body;
const existingUser = await User.findOne({email});
if(existingUser){
    throw createHttpError(409, 'Email in user');
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
})
    res.status(201).json(newUser);

};

export const loginUsers = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        throw createHttpError(401, 'Invalid credentials')
    }
    // const user = await User{

    // }
    res.status(200).json()
}