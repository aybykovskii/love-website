import React from "react";

import { Header as _Header } from "@components";
import { AuthContext } from "../../contexts/Auth";
import { TLink } from "@components/Header";
import { noop } from "@utils";
import { UserContext } from "../../contexts/User";
import { useStyles } from "./styles";

export type HeaderProps = {
  onSingUpClick: () => void;
  onLoginClick: () => void;
};
export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  onSingUpClick,
}) => {
  const classes = useStyles();
  const { sessionId, logout } = React.useContext(AuthContext);
  const { user } = React.useContext(UserContext);

  const links: TLink[] = [{ content: "Home", onClick: noop }];
  if (!sessionId) {
    links.push(
      { content: "SignUp", onClick: onSingUpClick },
      { content: "Login", onClick: onLoginClick }
    );
  } else {
    links.push(
      { content: "Log out", onClick: logout },
      { content: <div className={classes.email}>{user.email}</div> }
    );
  }

  return <_Header links={links} />;
};
