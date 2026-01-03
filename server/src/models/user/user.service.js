import { UserModel } from './user.model.js';

const createUserService = async payLoad => {
  const user = await UserModel.create(payLoad);
  return user;
};

// get all users
const getUserService = async () => {
  const users = await UserModel.find();
  return users;
};

export const UserService = {
  createUserService,
  getUserService,
};
