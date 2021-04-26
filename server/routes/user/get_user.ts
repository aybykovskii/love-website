import { TGetRequest } from "@ts/express/request";
import { TGetUserInput, TGetUserResponse } from "@ts/requests/GetUser";
import { NextFunction, Response } from "express";
import mongoose from "mongoose";
import { Session } from "../../models/session";
import { User } from "../../models/user";

export const get_user = async (
  req: TGetRequest<TGetUserInput>,
  res: Response<TGetUserResponse>,
  next: NextFunction
) => {
  try {
    const { session_id } = req.params;

    if (!session_id || !mongoose.Types.ObjectId.isValid(session_id)) {
      return res.json({ err: "invalid_params" });
    }
    const session = await Session.findById(session_id);

    if (!session) {
      return res.json({ err: "invalid_session" });
    }
    const user = await User.findById(session.user_id);
    if (!user) {
      return res.json({ err: "invalid_user" });
    }

    return res.json({
      user: {
        _id: user._id,
        email: user.email,
        created_at: user.created_at,
        __v: user.__v,
      },
    });
  } catch (error) {
    (req as any).error = error;
    next();
  }
};
