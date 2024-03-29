import axios from 'axios';
// const DETAIL_API = 'http://localhost:4000/api/tuits/detail';
const DETAIL_API = 'https://tuiter-node-backend-41ea.onrender.com/api/tuits/detail';

const getDetail = id => {
  return axios.get(`${DETAIL_API}/${id}`).then(response => {
    return response.data;
  });
};

export default getDetail;
