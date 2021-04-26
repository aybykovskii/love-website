import { NextFunction, Response } from "express";
import { TPostRequest } from "@ts/express/request";
import { TSingUpInput, TSignUpResponse } from "@ts/requests/SignUp";
import { validateEmail } from "../../utils/validateEmail";
import { User } from "../../models/user";
import md5 from "md5";

export const signup = async (
  req: TPostRequest<TSingUpInput>,
  res: Response<TSignUpResponse>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || !validateEmail(email)) {
      return res.json({ err: "invalid_params" });
    }

    const user = await User.create({
      email,
      password: md5(password),
      created_at: Date.now(),
    });
    if (!user) {
      return res.json({ err: "user_already_exists" });
    }

    res.json({});
  } catch (error) {
    (req as any).error = error;
    next();
  }
};
