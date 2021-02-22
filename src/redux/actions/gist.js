
import config from '../../config';
import axios from 'axios';

const beforeCall = () => {
    return {
        type: 'BEFORE_ALL_GISTS'
    }
}
const onSuccess = (dataObj, username) => {
    return {
        type: 'ALL_GISTS_SUCCESS',
        payload: dataObj,
        username: username,
        isLoading: false
    }
}
const onFailure = (err) => {
    return {
        type: 'ALL_GISTS_ERROR',
        errorMsg: err,
        isLoading: false
    }
}

const onSuccessFork = (dataObj) => {
    //I can pass normalized data here
    return {
        type: 'SINGLE_GIST_SUCCESS',
        payload: dataObj,
        isLoading: false
    }
}
const fetchAllGists = (username) => {
    return function(dispatch) {
        dispatch(beforeCall());
        return axios
        .get(config.getAllGistUrl(username)).then((response) => {
            if(response.data) {
                dispatch(onSuccess(response.data, username));
            } else {
                dispatch(onFailure(`0 Gists Found for ${username}`));
            }
        }).catch((err) => {
            dispatch(onFailure(`Some problem while making call`)); //${err} - you can pass - optional
        });
    }
}

const fetchForkGists = (username) => {
    return function(dispatch) {
        dispatch(beforeCall());
        return axios
        .get(config.getForkGistUrl(username)).then((response) => {
            if(response.data) {
                dispatch(onSuccessFork(response.data, username));
            } else {
                dispatch(onFailure(`0 Gists Found for ${username}`));
            }
        }).catch((err) => {
            dispatch(onFailure(`Some problem while making call`)); //${err} - you can pass - optional
        });
    }
}

export { fetchAllGists, fetchForkGists }

