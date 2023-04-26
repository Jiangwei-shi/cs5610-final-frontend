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
        const url = `http://localhost:4000/api/tuits/search?keyword=${encodeURIComponent(keyword)}`;
        const response = await axios.get(`http://localhost:4000/api/tuits/search?keyword=${encodeURIComponent(keyword)}`);
        const results = response.data.slice(0, 10); // Get the top 10 results
        dispatch(fetchResultsSuccess(results));
         // Update the URL with the encoded search keyword
        window.history.pushState(null, '', `?keyword=${encodeURIComponent(keyword)}`);
    } catch (error) {
        dispatch(fetchResultsFailure(error.message));
    }
};
