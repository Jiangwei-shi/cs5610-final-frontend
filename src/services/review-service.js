import axios from 'axios';
const REVIEWS_API = 'http://localhost:4000/api/tuits/reviews';

const getReviews = rid => {
  return axios.get(`${REVIEWS_API}/${rid}`).then(response => {
    return response.data;
  });
};

export default getReviews;
