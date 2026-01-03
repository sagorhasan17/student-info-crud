import { UserService } from './user.service.js';

const createUserController = async (req, res) => {
  try {
    const user = await UserService.createUserService(req.body);
    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// GET all users controller
const getUserController = async (req, res) => {
  try {
    const users = await UserService.getUserService();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

export const UserController = {
  createUserController,
  getUserController,
};
