import { UserModel } from './user.model.js';

const createUserService = async payLoad => {
  const user = await UserModel.create(payLoad);
  return user;
};

export const UserService = {
  createUserService,
};
