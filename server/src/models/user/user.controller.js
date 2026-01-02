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

export const UserController = {
  createUserController,
};
