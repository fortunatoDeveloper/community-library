import userRepository from "../repositories/user.repositories.js";
import bcrypt from 'bcrypt';

async function findAllUsersService() {
    const users = await userRepository.findAllUsersRepository();
    return users;
}

async function findUserByIdService(id) {
    const user = await userRepository.findUserByIdRepository(id);
    if(!user) throw new Error("User not found!");
    return user;
}

async function updateUserService(newUser, userId) {
    const user = await userRepository.findUserByIdRepository(userId);
    if(!user) throw new Error("User not found!");
    if(newUser.password) {
        newUser.password = await bcrypt.hash(newUser.password, 10);
    }
    const userUpdated = await userRepository.updateUserRepository(userId, newUser);
    return userUpdated;
}

async function deleteUserService(userId) {
    const user = await userRepository.findUserByIdRepository(userId);
    if(!user) throw new Error("User not found!");
    const { message } = await userRepository.deleteUserRepository(userId);
    return message;
}

export default {
    findAllUsersService,
    findUserByIdService,
    updateUserService,
    deleteUserService
}