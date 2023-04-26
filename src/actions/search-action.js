import axios from 'axios';
import {
    FETCH_RESULTS_REQUEST,
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_FAILURE
} from '../constants';

const fetchResultsRequest = () => ({
    type: FETCH_RESULTS_REQUEST
});

const fetchResultsSuccess = (results) => ({
    type: FETCH_RESULTS_SUCCESS,
    payload: results
});

const fetchResultsFailure = (error) => ({
    type: FETCH_RESULTS_FAILURE,
    payload: error
});

export const fetchResults = (keyword) => async (dispatch) => {
    try {
        dispatch(fetchResultsRequest());
        let results = [];
        if (keyword) {
          const response = await axios.get(`http://localhost:4000/api/tuits/search?keyword=${encodeURIComponent(keyword)}`);
          results = response.data.slice(0, 10);
        }
        dispatch(fetchResultsSuccess(results));
    } catch (error) {
        dispatch(fetchResultsFailure(error.message));
    }
};
