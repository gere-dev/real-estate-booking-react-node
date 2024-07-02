export interface AuthForm {
  name?: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  token: string;
}
