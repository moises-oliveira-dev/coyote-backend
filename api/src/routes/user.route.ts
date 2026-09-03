import { Router } from "express";
import * as UserController from '../controllers/user.controller.ts';
import { deflate } from "node:zlib";

const routerUsers = Router();

routerUsers.get("/", UserController.getAllUsers);

export default routerUsers;