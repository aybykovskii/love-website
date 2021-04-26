import React from "react";
import { IUser } from "@ts/User";
import { TMongooseModel } from "@ts/mongoose/model";
import { useHttp } from "@utils/http";
import { TGetUserResponse } from "@ts/requests/GetUser";
import { noopPromise } from "@utils";

const User = () => {
  const [user, setUser] = React.useState<
    Omit<TMongooseModel<IUser>, "password">
  >({
    _id: "",
    email: "",
    created_at: 0,
  });

  function getUser(sessionId: string) {
    return useHttp(`/user/get_user/${sessionId}`)
      .get<TGetUserResponse>()
      .then((res) => {
        if (res && res.user) {
          setUser(res.user);
        }
        return res;
      });
  }

  return {
    user,
    getUser,
  };
};

const UserDefault: ReturnType<typeof User> = {
  user: {
    _id: "",
    email: "",
    created_at: 0,
  },
  getUser: noopPromise as any,
};

export const UserContext = React.createContext(UserDefault);
export const UserContextProvider = (props: { children: React.ReactNode }) => {
  return (
    <UserContext.Provider value={User()}>{props.children}</UserContext.Provider>
  );
};
