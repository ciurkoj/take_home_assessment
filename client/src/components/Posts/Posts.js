import React from "react";
import {
	CircularProgress,
	Container,
	Grid,
	Typography,Box
} from "@material-ui/core";
import Post from "./Post/Post";
import { useSelector } from "react-redux";

/**
 * Posts Element groups all posts.
 * @returns container with posts inside of it
 */
const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	return !posts.length ? (
		<Container xs={12}>
			<CircularProgress style={{ alignContent: "center" }} xs={12} />
		</Container>
	) : (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
			spacing={2}
		>
			<Grid item xs={4}>
				<Typography variant="h5" align="center">
					Twitter
				</Typography>
				<Grid container spacing={3}>
					{posts.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Post post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h5" align="center">
					Facebook
				</Typography>
				<Grid container spacing={3}>
					{posts.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Post post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h5" align="center">
					Instagram
				</Typography>
				<Grid container spacing={3}>
					{posts.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Post post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Posts;
