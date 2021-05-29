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

import useStyles from './styles';


/**
 * App is the main application
 * @returns App element
 */
const App = () => {
	const [currentId, setCurrentId] = useState(0);
	const dispatch = useDispatch();
	const classes = useStyles();

  const reload = () =>{
    dispatch(clearPosts());
    dispatch(getPosts());
  }

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);
	return (
		<Container maxWidth="lg" className={classes.container}>
			<AppBar  className={classes.appBar} position="static" color="inherit">
				<Typography  className={classes.heading}  variant="h3" align="center">
					What is happening on the social networks?
				</Typography>
			</AppBar>

			<Button className={classes.button} size="large" variant="contained" color="default" onClick={reload} maxWidth="lg">Reload</Button>

			<Grow in>
				<Grid width={1} container justify="space-between" alignItems="stretch" >
					<Grid item style={{ margin:"auto"}} >
						<Posts setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
};

export default App;
