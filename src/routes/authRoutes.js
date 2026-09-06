import { Router } from "express";
import { loginUsers, registerUsers } from "../controllers/authControllers.js";
import {celebrate} from 'celebrate';
import { loginUsersSchema, registerUsersSchema } from "../validations/authValidations.js";

const authRoutes = Router();

authRoutes.post('/auth/register', celebrate(registerUsersSchema), registerUsers);
authRoutes.post('/auth/login', celebrate(loginUsersSchema), loginUsers);
export default authRoutes;