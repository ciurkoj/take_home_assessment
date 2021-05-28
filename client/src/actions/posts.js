import { FETCH_ALL, CLEAR} from '../constants/actionTypes';

import * as api from "../API/index";

export const getPosts = () => async (dispatch) => {
	try {
		const results_twitter = await api.fetchTwitter()
		const results_facebook = await api.fetchFacebook()
		const results_instagram = await api.fetchInstagram()
		const data_array= {twitter :results_twitter.data, facebook:results_facebook.data, instagram:results_instagram.data}

		console.log(data_array);

		dispatch({ type: FETCH_ALL, payload: data_array });
	} catch (error) {
		console.log(error.message);
	}
};

export const clearPosts = () => async (dispatch) => {
    try {
      dispatch({ type: CLEAR, payload: [] });
    } catch (error) {
      console.log(error.message);
    }
  };
  