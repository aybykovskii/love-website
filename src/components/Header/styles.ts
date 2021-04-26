import { makeStyles } from "@material-ui/styles";
import { transition } from "@utils";

export const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "header_inner-wrapper": {
    width: "90%",
    height: "auto",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "25px 0 ",
  },
  icon: {
    borderRadius: "50px",
    cursor: "pointer",
    "&>ellipse": {
      fill: "#ed5168",
      borderRadius: "50px",
    },
    "&:hover": {
      "&>ellipse": {
        fill: "#ff0026",
      },
    },
  },
  "nav-wrapper": {
    height: "55px",
    width: "auto",
    display: "flex",
    alignItems: "center",
    borderRadius: "50px",
    overflow: "hidden",
    paddingLeft: "1px",
  },
  "burger-button": {
    width: "50px",
    height: "50px",
    background: "#ed5168",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer",

    "& span": {
      height: "3px",
      width: "20px",
      background: "#ffffff",
      transition,

      "&:before": {
        display: "block",
        content: "''",
        height: "3px",
        width: "20px",
        background: "#ffffff",
        position: "absolute",
        top: "17px",
        transition,
      },

      "&:after": {
        display: "block",
        content: "''",
        height: "3px",
        width: "20px",
        background: "#ffffff",
        position: "absolute",
        bottom: "17px",
        transition,
      },
    },
    "&:hover": {
      background: "#ff0026",
      transition,
    },
  },
  "burger-button--active": {
    "& span": {
      height: "0",
      transition,
    },

    "& span:before": {
      transform: "translateY(200%) rotate(-45deg)",
    },

    "& span:after": {
      transform: "translateY(-250%) rotate(45deg)",
    },
  },

  "header_inner-wrapper_nav": {
    height: "48px",
    width: "calc(100% - 60px)",

    transform: "translateX(150%)",

    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",

    boxShadow: "0 0 5px 0 #ed5168",
    borderRadius: "50px",
    paddingLeft: "20px",
    paddingRight: "40px",
    marginRight: "-50px",
    transition,
  },

  "header_inner-wrapper_nav_item": {
    marginRight: "40px",

    fontSize: "18px",
    lineHeight: "15px",
    letterSpacing: "0.05em",
    textTransform: "capitalize",
    color: "#697CA6",
    textShadow: "0px 0px 5px #E6E6E6",

    cursor: "pointer",
    "&:hover": {
      color: "#f0a1ad",
      transition,
    },
  },

  nav__active: {
    transform: "translateX(0)",
  },

  // "@media(max-width: $max-width-xs)": {
  //   flexDirection: "column",
  //   "header_inner-wrapper_nav": {
  //     margin: "20px 0",
  //     flexDirection: "column",
  //     "&_item": {
  //       width: "100%",
  //       textAlign: "center",
  //       marginBottom: "15px",
  //       fontSize: "24px",
  //     },
  //   },
  // },
});
