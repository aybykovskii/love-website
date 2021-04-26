import mongoose from "mongoose";
import { IUser } from "../../ts/User";

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  created_at: { type: Number, required: true },
});

export interface UserDocument extends mongoose.Document, IUser {}
export const User = mongoose.model<UserDocument>("User", UserSchema);
