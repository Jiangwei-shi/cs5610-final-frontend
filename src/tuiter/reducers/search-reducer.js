import {
    FETCH_RESULTS_REQUEST,
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_FAILURE
} from '../../constants';

const initialState = {
    loading: false,
    results: [],
    error: null
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESULTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_RESULTS_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload,
                error: null
            };
        case FETCH_RESULTS_FAILURE:
            return {
                ...state,
                loading: false,
                results: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default resultsReducer;
