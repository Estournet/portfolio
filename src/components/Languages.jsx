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

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {
  faAndroid,
  faCss3Alt,
  faDocker,
  faGit,
  faHtml5,
  faJava,
  faLinux,
  faNodeJs,
  faPhp,
  faReact
} from "@fortawesome/free-brands-svg-icons";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// TODO Put those constants in a JSON file
const webLanguages = {
  sectionName: "Langages web",
  langages: [
    { name: "React", icon: faReact },
    { name: "PHP", icon: faPhp },
    { name: "Node.js", icon: faNodeJs },
    { name: "HTML 5", icon: faHtml5 },
    { name: "CSS 3", icon: faCss3Alt }
  ]
};

const classicLanguages = {
  sectionName: "Langages classiques",
  langages: [
    { name: "Java", icon: faJava },
    { name: "Android", icon: faAndroid },
    { name: "C" }
  ]
};

const databases = {
  sectionName: "Bases de données",
  langages: [
    { name: "MySQL", icon: faDatabase },
    { name: "MongoDB", icon: faDatabase },
    { name: "Firebase", icon: faDatabase }
  ]
};

const other = {
  sectionName: "Divers",
  langages: [
    { name: "GNU/Linux", icon: faLinux },
    { name: "Git", icon: faGit },
    { name: "Docker", icon: faDocker }
  ]
};

const section = (props, data) => (
  <React.Fragment>
    <Grid item xs={12}>
      <Typography variant="h5" paragraph className={props.classes.title}>
        {data.sectionName}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={8}>
        {data.langages.map(language => (
          <Grid item md={2} sm={4} xs={12} key={language.name}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar className={props.classes.avatar}>
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
  <Grid container spacing={8}>
    {section(props, webLanguages)}
    {section(props, classicLanguages)}
    {section(props, databases)}
    {section(props, other)}
  </Grid>
);

Languages.propTypes = {
  classes: PropTypes.object.isRequired
};
const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  avatar: {
    background: theme.palette.primary.main
  }
});

export default withStyles(styles)(Languages);
