import React from "react";

import { useStyles } from "./style";

export type TitleProps = {
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
};
export const Title: React.FC<TitleProps> = ({ children, subtitle }) => {
  const classes = useStyles();
  return (
    <div className={classes["header"]}>
      <div className={classes["header_title"]}>{children}</div>
      <div className={classes.empty}></div>
      {subtitle ? (
        <div className={classes["headers_subtitle"]}>{subtitle}</div>
      ) : (
        ""
      )}
    </div>
  );
};
