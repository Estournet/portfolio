/*
 * Vincent Monard
 *     Copyright (C) 2019  Vincent Monard
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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
