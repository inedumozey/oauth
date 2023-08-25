const get_user = require('./get_user')

const axios = require('axios')

async function get_user2(options) {
    const url_get_accesstoken = "https://github.com/login/oauth/access_token"

    if (!options.client_secret) throw new Error("client_secret is required")
    if (!options.code) throw new Error("code is required")
    if (!options.client_id) throw new Error("client_id is required")

    try {
        const body = {
            "code": options.code,
            "client_id": options.client_id,
            "client_secret": options.client_secret
        }
        const { data } = await axios.post(url_get_accesstoken, body)
        if (data.includes('error')) {
            throw new Error(data)
        }
        const accesstoken = data.split("=")[1].split("&")[0]

        // fetch user data
        const { data: user } = await get_user({ accesstoken })
        return user;
    }
    catch (err) {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.error || err.response.data.error_description) {
                    const msg = `${err.response.data.error}, ${err.response.data.error_description}`
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