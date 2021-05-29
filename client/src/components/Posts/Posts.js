import React from "react";
import {
	CircularProgress,
	Grid,
	Typography,
	Container,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useSelector } from "react-redux";

import Twitter from "./Twitter/Twitter";
import Facebook from "./Facebook/Facebook";
import Instagram from "./Instagram/Instagram";

/**
 * Posts Element groups all posts.
 * @returns container with posts inside of it
 */
const Posts = ({ setCurrentId }) => {
	const posts = useSelector((state) => state.posts);
	return !Object.keys(posts).length ? (
		<Grid container justify="center">
			<CircularProgress xs={12} justify="center" />
		</Grid>
	) : (
		<Grid
			container
			direction="row"
			justify="flex-start"
			alignItems="flex-start"
			spacing={2}
		>
			<Grid
				item
				xs={12}
				sm={6}
				md={4}
				justify="center"
				
			>
				<Typography variant="h4" align="center"style={{ backgroundColor: "#37b9ff", borderRadius: "15px",color:"white" }}>
					Twitter
				</Typography>
				<Grid
					container
					spacing={3}
					xs={12}
					justify="center"
					alignItems="center"
				>
					{posts.twitter.map((post, i) => {
						if (!post.error) {
							return (
								<Grid key={new Date().getTime() + i} item lg>
									<Twitter
										post={post}
										setCurrentId={setCurrentId}
									/>
								</Grid>
							);
						} else {
							return (
								<Grid key={new Date().getTime() + i} item xs>
									<Alert severity="warning">
										{post.error}
										<p>{post.message}</p>
									</Alert>
								</Grid>
							);
						}
					})}
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6} md={4} >
				<Typography variant="h4" align="center" style={{ backgroundColor: "#405894", borderRadius: "15px", color:"white" }}>
					Facebook
				</Typography>
				<Grid container spacing={3} xs={12}>
					{posts.facebook.map((post, i) => {
						if (!post.error) {
							return (
								<Grid key={new Date().getTime() + i} item>
									<Facebook
										post={post}
										setCurrentId={setCurrentId}
									/>
								</Grid>
							);
						} else {
							return (
								<Grid key={new Date().getTime() + i} item xs>
									<Alert severity="warning">
										{post.error}
										<p>{post.message}</p>
									</Alert>
								</Grid>
							);
						}
					})}
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<Typography variant="h4" align="center" style={{ backgroundImage: "url(" +"https://lh3.googleusercontent.com/proxy/jc1-VPPcLb9T4-zqqXLbxKpXrrqRoJpOS4dws0EVKCJNCcG9IOOv75LuiySSiR29CHT5mjlSHs4Ls3h65j69xUipFNgifkpjKsJHM941MO9vOBmWMigVMb6Yqj_BBbIGVNKXwkyv_cXyl_Y"+")", borderRadius: "15px", color:"white" }}>
					Instagram 
				</Typography>
				<Grid container spacing={3} xs={12}>
					{posts.instagram.map((post, i) => {
						if (!post.error) {
							return (
								<Grid key={new Date().getTime() + i} item>
									<Instagram
										post={post}
										setCurrentId={setCurrentId}
									/>
								</Grid>
							);
						} else {
							return (
								<Grid key={new Date().getTime() + i} item xs>
									<Alert severity="warning">
										{post.error}
										<p>{post.message}</p>
									</Alert>
								</Grid>
							);
						}
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Posts;
