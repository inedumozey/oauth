const axios = require('axios')

async function get_accesstoken(options) {
    const url_get_accesstoken = "https://github.com/login/oauth/access_token"

    if (!options?.client_secret) throw new Error("client_secret is required")
    if (!options?.code) throw new Error("code is required")
    if (!options?.client_id) throw new Error("client_id is required")

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
        const token = data.split("=")[1].split("&")[0]
        return token
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

module.exports = get_accesstoken;