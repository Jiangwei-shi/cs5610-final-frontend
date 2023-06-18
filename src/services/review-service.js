import axios from 'axios';
// const REVIEWS_API = 'http://localhost:4000/api/tuits/reviews';
const REVIEWS_API = 'https://tuiter-node-backend-41ea.onrender.com/api/tuits/reviews';

const getReviews = rid => {
  return axios.get(`${REVIEWS_API}/${rid}`).then(response => {
    return response.data;
  });
};

const createReview = review => {
  return axios.post(REVIEWS_API, review).then(response => {
    return response.data;
  });
};

export default {
  getReviews,
  createReview,
};
