import React from "react";

import { useStyles } from "./styles";
import { IconLogo } from "./svgs/IconLogo";

export type TLink = {
  content: string | React.ReactElement;
  onClick?: () => void;
};
export type HeaderProps = {
  links?: TLink[];
};
export const Header: React.FC<HeaderProps> = ({ links = [] }) => {
  const classes = useStyles();

  const [show, setShow] = React.useState<boolean>(false);

  return (
    <header className={classes.header}>
      <div className={classes["header_inner-wrapper"]}>
        <div>
          <IconLogo className={classes.icon} />
        </div>
        <div className={classes["nav-wrapper"]}>
          <nav
            className={
              classes["header_inner-wrapper_nav"] +
              (show ? ` ${classes["nav__active"]}` : "")
            }
          >
            {links.map((link, key) =>
              typeof link.content === "string" ? (
                <a
                  key={key}
                  className={classes["header_inner-wrapper_nav_item"]}
                  onClick={link.onClick}
                >
                  {link.content}
                </a>
              ) : (
                React.cloneElement(link.content, { ...link.content.props, key })
              )
            )}
          </nav>
          <div
            className={
              classes["burger-button"] +
              (show ? ` ${classes["burger-button--active"]}` : "")
            }
            onClick={() => setShow((show) => !show)}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};
