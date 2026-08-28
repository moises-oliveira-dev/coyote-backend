import express from 'express';
import users from './mocks/user.mock.ts';

const app = express();

app.get('/user', (_req, res) => {
  res.status(200).json(users);
});

app.listen(3000);
