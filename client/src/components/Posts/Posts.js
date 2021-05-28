import React from "react";
import {
	CircularProgress,
	Grid,
	Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import Twitter from './Twitter/Twitter';
import Facebook from './Facebook/Facebook';
import Instagram from './Instagram/Instagram';


/**
 * Posts Element groups all posts.
 * @returns container with posts inside of it
 */
const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	return !Object.keys(posts).length ? (
		<CircularProgress />
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
					{posts.twitter.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Twitter post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h5" align="center">
					Facebook
				</Typography>
				<Grid container spacing={3}>
					{posts.facebook.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Facebook post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={4}>
				<Typography variant="h5" align="center">
					Instagram
				</Typography>
				<Grid container spacing={3}>
					{posts.instagram.map((post, i) => (
						<Grid key={new Date().getTime() + i} item>
							<Instagram post={post} setCurrentId={setCurrentId} />
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Posts;
