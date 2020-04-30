/**
 * Thème personnel
 */
import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Google Sans", "Roboto"'
  },
  palette: {
    primary: {
      main: "#d9307f"
    },
    secondary: {
      main: "#ad2e89"
    },
    type: "light"
  }
});

export default theme;
