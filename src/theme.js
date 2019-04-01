import purple from "@material-ui/core/colors/purple";
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
      main: purple[700]
    },
    secondary: {
      main: pink[600]
    },
    type: "light"
  }
});

export default theme;
