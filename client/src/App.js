import React from "react";
import {
	Container,
	AppBar,
	Typography,
	Grow,
	Grid,
	Button,
} from "@material-ui/core";
import Posts from "./components/Posts/Posts";

/**
 * App is the main application
 * @returns App element
 */
const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h3" align="center">
					What is happening on the social networks?
				</Typography>
			</AppBar>

			<Button>Reload</Button>

			<Grow in>
				<Grid container justify="space-between" alignItems="stretch">
					<Grid item>
						<Posts />
					</Grid>
				</Grid>
			</Grow>
		</Container>
	);
};
export default App;
