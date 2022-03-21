import axios from 'axios';

const API_URL = process.env.VUE_APP_ENV_GOOGLE_API_BOOK_URL;
const API_KEY = process.env.VUE_APP_ENV_GOOGLE_API_KEY;

export const getBooks = (query = 'Stephen King novels', startIndex = 0, limit = 40) => axios.get(`${API_URL}?q=${query}&startIndex=${startIndex}&maxResults=${limit}&key=${API_KEY}`);

export const getBook = id => axios.get(`${API_URL}/${id}`);
