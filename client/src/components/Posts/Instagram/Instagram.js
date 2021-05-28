import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";

import useStyles from "./styles";

const Instagram = ({ post }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card} key={post.setCurrentId}>
			<Typography
				className={classes.title}
				gutterBottom
				variant="h5"
				component="h2"
			>
				{post.name}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.status}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Instagram;
