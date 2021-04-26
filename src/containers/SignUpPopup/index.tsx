import React from "react";

import { Popup, PopupTitle, PopupContent, TextField } from "@components";

import { useStyles } from "./styles";
import { useHttp } from "@utils/http";
import { TSignUpResponse, TSingUpInput } from "@ts/requests/SignUp";
import { AuthContext } from "../../contexts/Auth";

export type SignUpPopupProps = {
  onClose?: () => void;
};
export const SignUpPopup: React.FC<SignUpPopupProps> = ({ onClose }) => {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  function signup() {
    if (!email || !password) {
      return;
    }

    authContext.signup(email, password).then((res) => {
      if (!res?.err) {
        onClose && onClose();
      } else {
        console.log(res.err);
      }
    });
  }

  return (
    <Popup onClose={onClose}>
      <PopupTitle>Sign Up</PopupTitle>
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
          <button type="button" onClick={signup}>
            Confirm
          </button>
        </div>
      </PopupContent>
    </Popup>
  );
};
