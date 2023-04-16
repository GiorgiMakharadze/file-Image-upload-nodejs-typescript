export interface IUserSchema extends Document {
  _id: number;
  name: string;
  email: String;
  password: string;
  createJWT: () => string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}
