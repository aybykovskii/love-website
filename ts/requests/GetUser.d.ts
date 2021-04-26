import { IUser } from "../User";
import { TMongooseModel } from "../mongoose/model";

export type TGetUserInput = {
  session_id: string;
};

export type TGetUserResponse = {
  user?: Omit<TMongooseModel<IUser>, "password">;
  err?: "invalid_params" | "invalid_session" | "invalid_user";
};
