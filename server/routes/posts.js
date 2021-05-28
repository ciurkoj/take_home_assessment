const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

// Setting up the paths and fetching the response.
router.get("/twitter", async (req, res) => {
	const url = "https://takehome.io/twitter";
	const result = fetchAPI(url);
	console.log("twitter", await result);
	res.send(await result);
});

router.get("/facebook", async (req, res) => {
	const url = "https://takehome.io/facebook";
	const result = fetchAPI(url);
	console.log("facebook", await result);
	res.send(await result);
});

router.get("/instagram", async (req, res) => {
	const url = "https://takehome.io/instagram";
	const result = fetchAPI(url);

	console.log("instagram", await result);

	res.send(await result);
});

/**
 * fetchAPI() function gathers data provided by the API, converts json object to JS object.
 * @param url - an API URL to fetch data
 * @return data - array of objects from API
 */
function fetchAPI(url) {
	return fetch(url)
		.then((response) => {
			if (response.ok) {
				return response
					.json()
					.then((data) => {
						// console.log(data);
						return data;
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				return response
					.text()
					.then((data) => {
						// console.log(data);
						return [
							{
								error: "Encountered an error. Please reload",
								message: data,
							},
						];
					})
					.catch((err) => {
						console.log(err);
					});
				throw "Something went wrong";
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

module.exports = router;
