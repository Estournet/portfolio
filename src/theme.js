import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

/**
 * Thème personnel
 * @type {Theme}
 */
export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Google Sans", "Roboto"'
  },
  palette: {
    primary: {
      main: lightBlue[600]
    },
    secondary: {
      main: pink[700]
    },
    type: "light"
  }
});

export default theme;
