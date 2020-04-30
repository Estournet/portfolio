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

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../theme";
import { ChipGroup } from "./ChipGroup";

export const ProjectCard = ({ banner, name, shortDescription, link, languages }) => (
  <Card style={styles.container}>
    <div>
      <CardMedia
        style={styles.media}
        image={require("../assets/" + banner)}
        title={name}
      />
      <CardContent>
        <div style={styles.titleContainer}>
          <Typography gutterBottom variant="h5" component="h2" style={styles.title}>
            {name} •
          </Typography>
          <ChipGroup chips={languages}/>
        </div>
        <Typography component="p">
          {shortDescription}
        </Typography>
      </CardContent>

    </div>
    <CardActions style={styles.cardAction}>
      <Button
        size="small"
        color="secondary"
        component={Link}
        to={"/project/" + encodeURI(name.toLowerCase())}>
        En savoir plus
      </Button>
      {link && (
        <Button
          size="small"
          color="secondary"
          href={link}
          target="_blank"
          rel="noopener noreferrer">
          Voir le projet&nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth/>
        </Button>
      )}
    </CardActions>
  </Card>
);

const styles = ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 340
  },
  titleContainer: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-start",
    flexWrap: "wrap"
  },
  title: {
    marginRight: theme.spacing(1)
  },
  cardAction: {
    marginBottom: theme.spacing(1),
    display: "flex",
    bottom: 0,
    justifyContent: "space-between"
  }
});
