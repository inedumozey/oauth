const get_user = require('./get_user');
const axios = require('axios')

async function get_user2(options) {
    const url_get_accesstoken = "https://graph.facebook.com/v17.0/oauth/access_token"

    if (!options.client_secret) throw new Error("client_secret is required")
    if (!options.code) throw new Error("code is required")
    if (!options.client_id) throw new Error("client_id is required")
    if (!options.redirect_uri) throw new Error("redirect_uri is required")
    try {
        const url = `${url_get_accesstoken}?client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&client_secret=${options.client_secret}&code=${options.code}`

        const { data } = await axios.get(url)
        const accesstoken = data.access_token

        // fetch user data
        const { data: user } = await get_user({ accesstoken })
        return user;
    }
    catch (err) {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.error) {
                    const msg = `${err.response.data.error.message}`
                    throw Error(msg)
                }
                else {
                    throw Error("Unknown error")
                }
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

module.exports = get_user2;