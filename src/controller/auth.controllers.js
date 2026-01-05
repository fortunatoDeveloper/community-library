import { loginService, registerService } from "../service/auth.service.js";

async function loginUserController(req, res) {
    const { email, password } = req.body;

    try {
        const token = await loginService(email, password);
        return res.send({ token });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

async function registerUserController(req, res) {
    const { username, email, password, avatar } = req.body;

    try {
        const token = await registerService(username, email, password, avatar);
        return res.status(201).send({ 
            message: "User created successfully!",
            token 
        });
    } catch (e) {
        return res.status(400).send(e.message);
    }
}

export default {
    loginUserController,
    registerUserController
};