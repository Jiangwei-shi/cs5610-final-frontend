import axios from 'axios'
// const SEARCH_API = "http://localhost:4000/api/tuits/search"
const SEARCH_API = "https://tuiter-node-backend-41ea.onrender.com/api/tuits/search"

export const searchYelp = async (keyword) => {
    const response = await axios.get(`${SEARCH_API}?keyword=${keyword}`);
    return response.data;
}