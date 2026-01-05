import { Router } from 'express';
import userController from '../controller/user.controllers.js';
import { validateUserId } from '../middlewares/validation.middlewares.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authMiddleware);
router.get(
    '/',
    userController.findAllUsersController
);

router.get (
    '/:id',
    validateUserId,
    userController.findUserByIdController
)

router.patch (
    '/:id',
    validateUserId,
    userController.updateUserController
)

router.delete (
    '/:id',
    validateUserId,
    userController.deleteUserController
)

export default router