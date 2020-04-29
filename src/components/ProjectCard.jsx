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

import React from 'react';
import Typography from '@material-ui/core/Typography/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import ChipGroup from './ChipGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = props => (
	<Card>
		<CardMedia className={props.classes.media} image={require('../assets/' + props.banner)} title={props.name} />
		<CardContent>
			<Typography gutterBottom variant="h5" component="h2">
				{props.name}
			</Typography>
			<ChipGroup chips={props.languages} />
			<Typography align="justify" component="p">
				{props.shortDescription}
			</Typography>
		</CardContent>
		<CardActions className={props.classes.cardAction}>
			{props.link && (
				<Button size="small" color="primary" href={props.link} target="_blank" rel="noopener noreferrer">
					Voir le projet&nbsp;
					<FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
				</Button>
			)}
			<Button size="small" variant="contained" color="primary" component={Link} to={'/project/' + props.name}>
				En savoir plus
			</Button>
		</CardActions>
	</Card>
);

ProjectCard.propTypes = {
	banner: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	shortDescription: PropTypes.string.isRequired,
	classes: PropTypes.object.isRequired
};

const styles = theme => ({
	media: {
		height: 340
	},
	cardAction: {
		marginBottom: theme.spacing.unit
	}
});

export default withStyles(styles)(ProjectCard);
