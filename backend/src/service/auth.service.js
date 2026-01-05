import jwt from 'jsonwebtoken';
import "dotenv/config";
import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';

function generateJWT(id) {
    return jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: 86400 })
}

async function loginService(email, password) {
    const user = await userRepository.findUserByEmailRepository(email);
    if (!user) {
        throw new Error('Invalid user!');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        throw new Error('Invalid user!');
    }
    return generateJWT(user.id);
}

async function registerService(username, email, password, avatar) {
    if (!username || !email || !password) throw new Error("Required fields are empty.");

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userRepository.createUserRepository({
        username,
        email,
        password: hashedPassword,
        avatar
    });

    return generateJWT(newUser.id);
}

export { generateJWT, loginService, registerService };