import mongoose from "mongoose";
import { NextFunction, Response } from "express";

import { Session } from "../../models/session";
import { TPostRequest } from "@ts/express/request";

import {
  TCheckSessionInput,
  TCheckSessionResponse,
} from "@ts/requests/CheckSession";

export const check_session = async (
  req: TPostRequest<TCheckSessionInput>,
  res: Response<TCheckSessionResponse>,
  next: NextFunction
) => {
  try {
    const { session_id } = req.body;
    if (!session_id || !mongoose.Types.ObjectId.isValid(session_id)) {
      return res.json({ err: "invalid_params" });
    }

    const session = await Session.findById(session_id);
    if (!session) {
      return res.json({ err: "invalid_session" });
    }

    return res.json({});
  } catch (error) {
    (req as any).error = error;
    next();
  }
};
