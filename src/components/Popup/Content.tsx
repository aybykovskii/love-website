import React from "react";

export type ContentProps = {
  className?: string;
  children?: React.ReactNode;
};
export const Content: React.FC<ContentProps> = ({
  className,
  children = "",
}) => {
  return <div className={className}>{children}</div>;
};
