import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core/";

/**
 * Post is a container for a single post
 * @returns post element
 */
const Post = ({ post }) => {
	return (
		<Card key={post.setCurrentId}>
			<Typography
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
export default Post;
