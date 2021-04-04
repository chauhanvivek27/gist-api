import { ALL_GIST_SUCCESS, GIST_ERROR } from '../type';

const initialState = {
    username: '',
    isLoading: false,
    error: null,
    gists: [],
}

const allGistsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ALL_GIST_SUCCESS:
            return {...state, gists: [...action.payload], isLoading: false, username: action.username, error: null}
        case GIST_ERROR:
            return {...state, gists: [], isLoading: false, username: action.username, error: action.errorMsg};
        default:
            return state;
    }
}

export default allGistsReducer;