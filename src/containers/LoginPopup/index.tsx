import React from "react";

import { Popup, PopupTitle, PopupContent, TextField } from "@components";

import { useStyles } from "./styles";
import { TSignInResponse, TSingInInput } from "@ts/requests/SignIn";
import { useHttp } from "@utils/http";
import { AuthContext } from "../../contexts/Auth";

export type LoginPopupProps = {
  onClose?: () => void;
};
export const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  function signin() {
    if (!email || !password) {
      return;
    }

    authContext.signin(email, password).then((res) => {
      if (res?.session_id && onClose) {
        onClose();
      }
    });
  }

  return (
    <Popup onClose={onClose}>
      <PopupTitle>Login</PopupTitle>
      <PopupContent className={classes.popup_content}>
        <TextField
          id="email"
          className="popup_email"
          label="Email"
          type="email"
          inputClassName={classes.popup_input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          className="popup_password"
          label="Password"
          type="password"
          inputClassName={classes.popup_input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={classes.popup_button}>
          <button type="submit" onClick={signin}>
            Confirm
          </button>
        </div>
      </PopupContent>
    </Popup>
  );
};
