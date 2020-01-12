/**
 * Thème personnel
 * @type {Theme}
 */
import { lightBlue, pink } from "@material-ui/core/colors";

import { createMuiTheme } from "@material-ui/core/styles";

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
