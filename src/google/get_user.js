const axios = require('axios')

async function get_user(options) {
    try {
        const url_get_user = "https://www.googleapis.com/oauth2/v2/userinfo"

        // use the access token to get user data
        const data = await axios.get(url_get_user, {
            headers: {
                Authorization: `Bearer ${options.accesstoken}`
            }
        })
        return data;
    }
    catch (err) {
        if (err.response) {
            const msg = `${err.response.data.error}, ${err.response.data.error_description}`
            throw Error(msg)
        }
        else {
            const msg = `${err.message}, ${err.name}`
            throw Error(msg)
        }
    }
}

module.exports = get_user;