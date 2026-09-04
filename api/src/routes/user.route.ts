import { Router } from "express";
import * as UserController from '../controllers/user.controller.ts';

const routerUsers = Router();

routerUsers.get("/", UserController.getAllUsers);
routerUsers.get('/:id', UserController.getUserbyId);

export default routerUsers;