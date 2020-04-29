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
import Footer from './Footer.jsx';
import AsyncContent from '../components/AsyncContent';
import ErrorCatcher from './ErrorCatcher';
import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const Decoration = props => (
	<div className={props.classes.root}>
		<Grid container className={props.classes.page}>
			<Grid item xs={12}>
				<main className={props.classes.content}>
					<ErrorCatcher>
						<AsyncContent />
					</ErrorCatcher>
				</main>
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</Grid>
	</div>
);

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'row-reverse',
		justifyContent: 'center'
	},
	page: {
		maxWidth: '1200px'
	},
	content: {
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		minHeight: '100vh'
	}
});

Decoration.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Decoration);
