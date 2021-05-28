import React, { useState, useEffect } from "react";
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Button,
} from "@material-ui/core";
import Posts from "./components/Posts/Posts";

import { useDispatch } from "react-redux";
import { clearPosts, getPosts } from './actions/posts';

/**
 * App is the main application
 * @returns App element
 */
const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const dispatch = useDispatch();

  const reload = () =>{
    dispatch(clearPosts());
    dispatch(getPosts());
  }

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h3" align="center">
					What is happening on the social networks?
				</Typography>
			</AppBar>

			<Button onClick={reload}>Reload</Button>

			<Grow in>
				<Grid container justify="space-between" alignItems="stretch">
					<Grid item>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
};

export default App;
