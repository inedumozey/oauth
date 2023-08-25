const axios = require('axios')

async function get_user(options) {
    try {
        const url_get_user = ""

        // use the access token to get user data
        const data = await axios.get(url_get_user, {
            headers: {
                Authorization: `Bearer ${options.accesstoken}`
            }
        })
        return data;
    }
    catch (err) {
        if (err.error) {
            if (err.error.error || err.error.error_description) {
                const msg = `${err.error.error}, ${err.error.error_description}`
                throw Error(msg)
            }
            else {
                throw Error("Unknown error")
            }
        }
        else {
            const msg = `${err.message}, ${err.name}`
            throw Error(msg)
        }
    }
}

module.exports = get_user;