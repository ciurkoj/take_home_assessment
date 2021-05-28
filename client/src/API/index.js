import axios from "axios";

const url = "http://localhost:4000/posts/twitter";

export const fetchPost = () => axios.get(url);
