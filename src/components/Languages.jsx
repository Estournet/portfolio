/*
 * Vincent Monard
 *     Copyright (C) 2020  Vincent Monard
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardHeader, Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import { languagesSections } from "../datas/languages";

const Section = ({ classes, languagesSection }) => (
  <React.Fragment>
    <Grid item xs={12}>
      <Typography variant="h5" paragraph className={classes.title}>
        {languagesSection.sectionName}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={1}>
        {languagesSection.languages.map(language => (
          <Grid item md={2} sm={4} xs={12} key={language.name}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    {language.icon ? (
                      <FontAwesomeIcon
                        icon={language.icon}
                        size="lg"
                        fixedWidth
                      />
                    ) : (
                      language.name.charAt(0)
                    )}
                  </Avatar>
                }
                title={language.name}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </React.Fragment>
);

const Languages = props => (
  <Grid container spacing={1}>
    {languagesSections.map(languagesSection => (
      <Section
        key={languagesSection.sectionName}
        languagesSection={languagesSection}
        classes={props.classes}
      />
    ))}
  </Grid>
);

Languages.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  avatar: {
    background: theme.palette.primary.main
  }
});

export default withStyles(styles)(Languages);
