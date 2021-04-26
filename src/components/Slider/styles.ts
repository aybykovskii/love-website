import { makeStyles } from "@material-ui/styles";
import { breakpoints, transition } from "@utils";

export const useStyles = makeStyles({
  "slider-wrapper": {
    width: "auto",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [`@media(max-width: ${breakpoints.maxWidthMd})`]: {
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
      width: 550,
    },

    [`@media(max-width: ${breakpoints.maxWidthSm})`]: {
      width: "300px",
    },
  },
  "slider-wrapper_item": {
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    "& > svg": {
      width: "57px",
      height: "29px",
    },
    "&:hover": {
      "slider-wrapper_item>svg>path": {
        stroke: "#8396e4",
        transition: ".4s",
      },
    },
    "&:focus, &:active": {
      outline: "none",
      "& > svg path": {
        stroke: "#8396e4 ",
        transition: ".4s",
      },
    },
    [`@media(min-width: ${breakpoints.minWidthMd})`]: {
      "& > svg": {
        width: "77px",
        height: "49px",
      },
    },
  },

  slider: {
    width: "600px",
    height: "400px",
    overflow: "hidden",
    margin: "0 auto 20px auto",
    [`@media(min-width: ${breakpoints.minWidthSm})`]: {
      margin: "0 100px",
      width: "600px",
    },
    [`@media(max-width: ${breakpoints.maxWidthMd})`]: {
      width: "770px",
      margin: "0 auto",
      marginBottom: "25px",
      order: -1,
    },
  },
  "slider_slider-track": {
    display: "flex",
  },

  "dots-nav-wrapper": {
    padding: 0,
    width: "350px",
    height: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    listStyle: "none",
    [`@media(max-width: ${breakpoints.maxWidthMd})`]: {
      display: "none",
    },
  },
  "dots-nav-wrapper_item": {
    height: "9px",
    width: "9px",
    backgroundColor: "#d9dde6",
    borderRadius: "15px",
    cursor: "pointer",
    "&:hover": {
      background: "#A8B4E5",
      transition,
    },
  },
  active: {
    background: "#8396e4",
    transition: ".7s",
  },
});
