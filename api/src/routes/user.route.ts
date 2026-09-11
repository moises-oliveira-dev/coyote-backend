import { Router } from "express";
import * as UserController from '../controllers/user.controller.ts';

const routerUsers = Router();

routerUsers.get("/", UserController.getAllUsers);
routerUsers.get('/:id', UserController.getUserbyId);
routerUsers.post('/', UserController.createUser);
routerUsers.put('/:id', UserController.UpdateUser);

export default routerUsers;