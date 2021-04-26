import { makeStyles } from "@material-ui/styles";
import { breakpoints } from "@utils";

export const useStyles = makeStyles({
  timer: {
    padding: 0,
    height: "auto",
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",

    listStyle: "none",

    margin: "70px 0",

    [`@media(max-width:${breakpoints.maxWidthXs})`]: {
      flexDirection: "column",
    },
  },
  timer_item: {
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    lineHeight: "77px",
    letterSpacing: "0.03em",
    color: "#3D4F9F",
  },
  time: {
    fontSize: "50px",
    width: "auto",
    marginRight: "15px",
  },
  word: {
    fontSize: "40px",
    width: "auto",
  },
});
