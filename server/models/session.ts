import mongoose from "mongoose";
import { ISession } from "@ts/Session";

const SessionSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  created_at: { type: Number, required: true },
});

export interface SessionDocument extends mongoose.Document, ISession {}
export const Session = mongoose.model<SessionDocument>(
  "Session",
  SessionSchema
);
