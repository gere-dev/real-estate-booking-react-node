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
  user_id: number;
  name: string;
  email: string;
  token: string;
}

export interface AuthFormErrors {
  email?: string;
  password?: string;
  name?: string;
}
