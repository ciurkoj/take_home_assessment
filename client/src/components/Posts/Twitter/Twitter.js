import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";

import useStyles from "./styles";

const Twitter = ({ post}) => {
	const classes = useStyles();

	return (
		<Card className={classes.card} key={post.setCurrentId}>
			<Typography
				className={classes.title}
				gutterBottom
				variant="h5"
				component="h2"
			>
				{post.username}
			</Typography>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{post.tweet}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Twitter;
