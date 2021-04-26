import React from "react";

import { useStyles } from "./styles";

export type TitleProps = {
  className?: string;
  children?: React.ReactNode;
};
export const Title: React.FC<TitleProps> = ({ className, children = "" }) => {
  const classes = useStyles();
  return (
    <div className={classes.popup_title + (className ? ` ${className}` : "")}>
      {children}
    </div>
  );
};
