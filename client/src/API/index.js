import axios from "axios";

const url_twitter = 'http://localhost:4000/posts/twitter';

export const fetchTwitter = () => axios.get(url_twitter)

const url_facebook = 'http://localhost:4000/posts/facebook';

export const fetchFacebook = () => axios.get(url_facebook)

const url_instagram = 'http://localhost:4000/posts/instagram';

export const fetchInstagram = () => axios.get(url_instagram)
