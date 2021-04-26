import { makeStyles } from "@material-ui/styles";
import { fonts } from "@utils";
export const useStyles = makeStyles({
  popup: {
    width: "100%",
    height: "100%",

    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 10,

    backgroundColor: "rgba(0,0,0, .2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  popup_window: {
    width: 400,
    backgroundColor: "#fff",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: fonts.primary,
  },
  popup_title: {
    padding: 15,
    fontSize: 22,
    letterSpacing: 0.7,
    fontWeight: "bold",
  },
});
