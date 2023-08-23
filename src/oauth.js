const open_consent_screen_google = require('./google/open_consent_screen')
const get_accesstoken_google = require('./google/get_accesstoken')
const get_user_google = require('./google/get_user')

const open_consent_screen_github = require('./github/open_consent_screen')
const get_accesstoken_github = require('./github/get_accesstoken')
const get_user_github = require('./github/get_user')

class Oauth {
    constructor() { }

    google = {
        open_consent_screen(options) {
            return open_consent_screen_google({
                redirect_uri: options.redirect_uri,
                client_id: options.client_id
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_google({
                redirect_uri: options.redirect_uri,
                client_id: options.client_id,
                client_secret: options.client_secret,
                code: options.code,
            })
        },
        get_user(options) {
            return get_user_google({
                accesstoken: options.accesstoken
            })
        },
    }

    github = {
        open_consent_screen(options) {
            return open_consent_screen_github({
                redirect_uri: options.redirect_uri,
                client_id: options.client_id
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_github({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
        get_user(options) {
            return get_user_github({
                accesstoken: options.accesstoken
            })
        },
    }
}

module.exports = Oauth

