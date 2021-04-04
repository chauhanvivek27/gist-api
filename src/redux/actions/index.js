import { ALL_GIST_SUCCESS, GIST_ERROR } from '../type';


export const onSuccess = (dataObj, username) => {
    return {
        type: ALL_GIST_SUCCESS,
        payload: dataObj,
        username: username,
        isLoading: false
    }
}
export const onFailure = (err) => {
    return {
        type: GIST_ERROR,
        errorMsg: err,
        isLoading: false
    }
}