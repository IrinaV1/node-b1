import { Router } from 'express';
import { registerUser } from '../controllers/authController.js';
import { registerUserSchema } from '../validations/authValidations.js';
import { celebrate } from 'celebrate';

const authRoutes = Router();

authRoutes.post('/auth/register', celebrate(registerUserSchema), registerUser);

export default authRoutes;
