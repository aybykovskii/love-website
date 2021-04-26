import React from "react";

import { Header, LoginPopup, SignUpPopup } from "@containers";
import { PhotosSection, TimerSection } from "./sections";
import { useStyles } from "@utils/globalStyles";
import { UserContext } from "./contexts/User";
import { AuthContext } from "./contexts/Auth";

export const App = () => {
  useStyles();
  const { getUser } = React.useContext(UserContext);
  const { sessionId } = React.useContext(AuthContext);

  const [showLogin, setShowLogin] = React.useState<boolean>(false);
  const [showSignUp, setShowSignUp] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (sessionId) {
      getUser(sessionId);
    }
  }, [sessionId]);

  return (
    <div>
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUpPopup onClose={() => setShowSignUp(false)} />}
      <Header
        onLoginClick={() => setShowLogin(true)}
        onSingUpClick={() => setShowSignUp(true)}
      />
      <PhotosSection />
      <TimerSection />
    </div>
  );
};
