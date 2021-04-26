import { makeStyles } from "@material-ui/styles";
import { fonts } from "@utils";

export const useStyles = makeStyles({
  header: {
    width: "350px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: "10px",
  },
  header_title: {
    padding: 10,
    fontFamily: fonts.secondary,
    fontSize: "10px",
    lineHeight: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#3D4F9F",
  },

  headers_subtitle: {
    padding: 5,
    fontSize: "24px",
    lineHeight: "30px",
    textAlign: "center",
    color: "#3D4F9F",
    letterSpacing: ".5px",
  },

  empty: {
    height: "0.5px",
    width: "45px",
    backgroundColor: "rgb(175, 173, 173)",
  },
});
