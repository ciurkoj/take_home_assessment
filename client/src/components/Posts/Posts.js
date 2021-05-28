import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

/**
 * Posts Element groups all posts.
 * @returns container with posts inside of it
 */
const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid container alignItems="stretch" spacing={3}>
			{posts.map((post) => (
				<Grid item xs={12} sm={6} md={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
};

export default Posts;
