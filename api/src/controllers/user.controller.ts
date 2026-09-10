import type { Request, Response } from 'express';
import * as UserService from '../services/user.service.ts';
import type { CreateUser } from '../types/user.type.ts';

export function getAllUsers(_resquest: Request, response: Response): void {
  const users = UserService.findAllUsers();

  response.status(200).json(users);
}

export function getUserbyId(request: Request, response: Response): void {
 const id = Number (request.params.id);
 
  const user = UserService.findUserById(id);

  response.status(200).json(user)
}

export function createUser (request: Request, response: Response): void{
 const {name, email, password } = request.body as CreateUser;
 
  const user =  UserService.insertUser({name, email, password});

  response.status(200).json(user);
}