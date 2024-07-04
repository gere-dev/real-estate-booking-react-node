export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  user: User;
  token: string;
};
