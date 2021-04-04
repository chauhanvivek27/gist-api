import config from '../../config';
import axios from 'axios';
import { onSuccess, onFailure } from './index';

const fetchAllGists = (username) => {
    return function(dispatch) {
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

export {fetchAllGists};