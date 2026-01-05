import { Router } from 'express';
import { validate } from "../middlewares/validation.middlewares.js";
import { userSchema } from '../schema/user.schema.js';
import authController from '../controller/auth.controllers.js';

const router = Router();

router.post(
    '/register',
    validate(userSchema), 
    authController.registerUserController
);

router.post(
    '/login',
    authController.loginUserController
);

export default router;