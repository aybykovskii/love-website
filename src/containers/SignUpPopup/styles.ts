import { makeStyles } from "@material-ui/styles";
export const useStyles = makeStyles({
  popup_input: {
    outline: "none",
    border: "none",
    height: 30,
    borderBottom: "1px solid black",
    marginLeft: 10,
  },
  popup_button: {
    padding: 15,
  },
  popup_content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
