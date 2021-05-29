import React from "react";
import {
	Card,
	CardContent,
	Typography,
	Avatar,
	Grid,
} from "@material-ui/core/";

import useStyles from "./styles";

import default_avatar from "../../../resources/default_avatar.png";
const Twitter = ({ post }) => {
	const classes = useStyles();

	return (
		<Grid container direction="row" alignItems="flex-end">
			<Avatar alt="Remy Sharp" src={default_avatar} />
			<Typography className={classes.title} gutterBottom component="h2">
				{post.username}
			</Typography>
			<Card className={classes.card} key={post.setCurrentId}>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{post.tweet}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Twitter;
