const  BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.github.com'; //Added the heroku cors to remove cross origin error


export default {
    getAllGistUrl: (username) => {
        return `${BASE_URL}/users/${username}/gists`;
    },
    getForkGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}