import express from 'express';
import { UserController } from './user.controller.js';

const router = express.Router();

router.post('/create-user', UserController.createUserController);
router.get('/get-users', UserController.getUserController);

export const UserRoutes = router;
