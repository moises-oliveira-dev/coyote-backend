import type { User } from "../types/user.type.ts";

const users: User[] = [{
  id: 1,
  name: 'Lula',
  email: 'lula@gmail.com',
  password: crypto.randomUUID()
}, {
  id: 2,
  name: 'Neimar',
  email: 'neimarkk@gmail.com',
  password: crypto.randomUUID()
}, {
  id: 3,
  name: 'Billy',
  email: 'billy@gmail.com',
  password: crypto.randomUUID()
}];

export default users;