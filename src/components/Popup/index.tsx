import React from "react";

import { useStyles } from "./styles";

export type PopupProps = {
  className?: string;
  children?: React.ReactNode;
  onClose?: () => void;
};
export const Popup: React.FC<PopupProps> = ({
  className,
  children = "",
  onClose,
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.popup + (className ? ` ${className}` : "")}
      onClick={onClose}
    >
      <div
        className={classes.popup_window}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
