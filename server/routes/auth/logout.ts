import mongoose from "mongoose";
import { NextFunction, Response } from "express";

import { Session } from "../../models/session";
import { TPostRequest } from "@ts/express/request";

import { TLogoutInput, TLogoutResponse } from "@ts/requests/Logout";

export const logout = async (
  req: TPostRequest<TLogoutInput>,
  res: Response<TLogoutResponse>,
  next: NextFunction
) => {
  try {
    const { session_id } = req.body;
    if (!session_id || !mongoose.Types.ObjectId.isValid(session_id)) {
      return res.json({ err: "invalid_params" });
    }

    const session = await Session.findById(session_id);
    if (session) {
      await session.remove();
    }

    return res.json({});
  } catch (error) {
    (req as any).error = error;
    next();
  }
};
