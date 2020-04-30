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
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import { languagesSections } from "../datas/languages";

export const Languages = () => (
  <Grid container spacing={3}>
    {languagesSections.map(languagesSection => (
      <Grid item xs={12} key={languagesSection.sectionName}>
        <LanguageSection
          languagesSection={languagesSection}
        />
      </Grid>
    ))}
  </Grid>
);

const LanguageSection = ({ languagesSection }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h5">
          {languagesSection.sectionName}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {languagesSection.languages.map(language => (
            <Grid item md={2} sm={4} xs={6} key={language.name}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar className={classes.avatar}>
                      {language.icon ? (
                        <FontAwesomeIcon
                          icon={language.icon}
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
    </Grid>
  );
};

const useStyles = makeStyles(({ palette, spacing }) => ({
  avatar: {
    background: palette.primary.main,
    color: palette.getContrastText(palette.primary.main)
  }
}));

