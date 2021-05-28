import React from "react";
import { CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";

/**
 * Posts Element groups all posts.
 * @returns container with posts inside of it
 */
const Posts = () => {
	return (
		<>
			<CircularProgress />
			<Post />
		</>
	);
};

export default Posts;
