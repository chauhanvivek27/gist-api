const  BASE_URL = 'https://api.github.com'; //Added the heroku cors to remove cross origin error


export default {
    getAllGistUrl: (username) => {
        return `${BASE_URL}/users/${username}/gists`;
    },
    getSingleGistUrl: (gistId) => {
        return `${BASE_URL}/gists/${gistId}`
    }
}