import { FETCH_ALL, CLEAR } from "../constants/actionTypes";

export default (posts = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case CLEAR:
			return (action.payload = []);
		default:
			return posts;
	}
};
