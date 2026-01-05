import { Router } from "express";
import authRouters from '../routes/auth.routes.js'
import userRouters from '../routes/user.routes.js'
import bookRouters from '../routes/book.routes.js'
import loanRouters from '../routes/loan.routes.js'

const routers = Router();

routers.use("/auth", authRouters);
routers.use("/users", userRouters);
routers.use("/books", bookRouters);
routers.use("/loans", loanRouters);

export { routers };