import React from "react";
import { Card, CardContent, Typography,Grid, Avatar } from "@material-ui/core/";

import useStyles from "./styles";
import default_avatar from "../../../resources/default_avatar.png";


/**
 * There's no API response to Instagram, but I assume similar naming convention as in Facebook.
 */
const Instagram = ({ post }) => {
	const classes = useStyles();

	return (
		<Grid container direction="row" alignItems="flex-end">
			<Avatar alt="Remy Sharp" src={default_avatar} />
			<Typography
				className={classes.title}
				gutterBottom
				variant="h5"
				component="h2"
			>
				{post.name}
			</Typography>
		<Card className={classes.card} key={post.setCurrentId}>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.status}
				</Typography>
			</CardContent>
		</Card>
		</Grid>
	);
};

export default Instagram;
