/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 *     This program is part of Portfolio.
 *
 *     Portfolio is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Portfolio is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Portfolio.  If not, see <https://www.gnu.org/licenses/>.
 */
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ChipGroup } from "components";
import React from "react";
import { Link } from "react-router-dom";

export const ProjectCard = ({ banner, name, shortDescription, link, languages }) => {
  const classes = useStyles();
  return (
    <Card className={classes.container}>
      <div>
        <CardMedia
          className={classes.media}
          image={banner}
          title={name}
          component={Link}
          to={"/" + encodeURI(name.toLowerCase())}
        />
        <CardContent>
          <div className={classes.titleContainer}>
            <Typography gutterBottom variant="h5" className={classes.title}>
              {name} •
            </Typography>
            <ChipGroup chips={languages}/>
          </div>
          <Typography component="p">
            {shortDescription}
          </Typography>
        </CardContent>
      </div>
      <CardActions className={classes.cardAction}>
        <Button
          size="small"
          color="secondary"
          component={Link}
          to={"/" + encodeURI(name.toLowerCase())}>
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
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 240,
    [theme.breakpoints.down("sm")]: {
      height: 200
    },
    [theme.breakpoints.down("xs")]: {
      height: 160
    }
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
    padding: theme.spacing(2),
    display: "flex",
    bottom: 0,
    justifyContent: "space-between"
  }
}));
