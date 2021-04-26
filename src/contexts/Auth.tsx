import React from "react";

import { noopPromise } from "@utils";
import { useHttp } from "@utils/http";
import { TSignInResponse, TSingInInput } from "@ts/requests/SignIn";
import { LOCALSTORAGE_SESSION_ID } from "@utils/localStorage";
import { TSignUpResponse, TSingUpInput } from "@ts/requests/SignUp";
import { TLogoutInput, TLogoutResponse } from "@ts/requests/Logout";
import {
  TCheckSessionInput,
  TCheckSessionResponse,
} from "@ts/requests/CheckSession";

const Auth = () => {
  const [sessionId, _setSessionId] = React.useState<string>("");

  React.useEffect(() => {
    const _sessionId = localStorage.getItem(LOCALSTORAGE_SESSION_ID);
    if (_sessionId) {
      checkSession(_sessionId).then((res) => {
        if (res && !res.err) {
          setSessionId(_sessionId);
        }
      });
    }
  }, []);

  function signin(email: string, password: string) {
    return useHttp("/auth/signin")
      .post<TSingInInput, TSignInResponse>({
        email,
        password,
      })
      .then((res) => {
        if (res && res.session_id) {
          setSessionId(res.session_id);
        }
        return res;
      });
  }

  function signup(email: string, password: string) {
    return useHttp("/auth/signup").post<TSingUpInput, TSignUpResponse>({
      email,
      password,
    });
  }

  function logout() {
    return useHttp("/auth/logout")
      .post<TLogoutInput, TLogoutResponse>({ session_id: sessionId })
      .then((res) => {
        if (res && !res?.err) {
          setSessionId("");
        }
        return res;
      });
  }

  function checkSession(sessionId: string) {
    return useHttp("/auth/check_session").post<
      TCheckSessionInput,
      TCheckSessionResponse
    >({ session_id: sessionId });
  }

  function setSessionId(sessionId: string) {
    _setSessionId(sessionId);
    localStorage.setItem(LOCALSTORAGE_SESSION_ID, sessionId);
  }

  return {
    sessionId,
    signin,
    signup,
    logout,
  };
};

const AuthDefault: ReturnType<typeof Auth> = {
  sessionId: "",
  signin: noopPromise as any,
  signup: noopPromise as any,
  logout: noopPromise as any,
};
export const AuthContext = React.createContext(AuthDefault);
export const AuthContextProvider = (props: { children: React.ReactNode }) => {
  return (
    <AuthContext.Provider value={Auth()}>{props.children}</AuthContext.Provider>
  );
};
