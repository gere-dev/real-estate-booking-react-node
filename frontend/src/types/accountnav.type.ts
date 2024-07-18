export type Account_Nav =
  | {
      title: string;
      path: (userId: number) => string;
    }
  | {
      title: string;
      path: string;
    };
