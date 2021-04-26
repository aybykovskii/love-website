import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  "section-1": {
    width: "100%",
    height: "800px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",

    background: "linear-gradient(to bottom, white, #F5F8FF)",
  },
  photo: {
    height: "400px",
    minWidth: "600px",
  },
  red: {
    backgroundColor: "pink",
  },
  green: {
    background: "rgb(146, 211, 146)",
  },
});
