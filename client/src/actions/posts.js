import { FETCH_ALL, CLEAR} from '../constants/actionTypes';

import * as api from "../API/index";

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPost();

		console.log(data);
		console.log(await api.fetchPost());

		dispatch({ type: FETCH_ALL, payload: data });
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
  