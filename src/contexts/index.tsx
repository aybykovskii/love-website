import React from "react";
import { AuthContextProvider } from "./Auth";
import { UserContextProvider } from "./User";

export const ContextsProvider = (props: { children: React.ReactNode }) => {
  return (
    <AuthContextProvider>
      <UserContextProvider>{props.children}</UserContextProvider>
    </AuthContextProvider>
  );
};
