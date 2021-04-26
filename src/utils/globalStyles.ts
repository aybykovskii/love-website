import { makeStyles } from "@material-ui/styles";
import { fonts } from "@utils";

export const useStyles = makeStyles({
  "@global": {
    body: {
      margin: "0",
      padding: "0",
      fontFamily: fonts.primary,
      boxSizing: "border-box",
    },
  },
});
