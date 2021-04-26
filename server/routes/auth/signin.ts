import { NextFunction, Response } from "express";
import { TPostRequest } from "@ts/express/request";
import { TSingInInput, TSignInResponse } from "@ts/requests/SignIn";
import { validateEmail } from "../../utils/validateEmail";
import { User } from "../../models/user";
import md5 from "md5";
import { Session } from "../../models/session";

export const signin = async (
  req: TPostRequest<TSingInInput>,
  res: Response<TSignInResponse>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || !validateEmail(email)) {
      return res.json({ err: "invalid_params" });
    }

    const user = await User.findOne({ email, password: md5(password) });
    if (!user) {
      return res.json({ err: "invalid_email_or_password" });
    }

    const session = await Session.create({
      user_id: user._id.toString(),
      created_at: Date.now(),
    });
    if (!session) {
      return res.json({ err: "server_error" });
    }

    return res.json({ session_id: session._id });
  } catch (error) {
    (req as any).error = error;
    next();
  }
};
