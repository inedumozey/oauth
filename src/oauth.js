// google
const open_consent_screen_google = require('./google/open_consent_screen')
const get_accesstoken_google = require('./google/get_accesstoken')
const get_user_google = require('./google/get_user')
const get_user2_google = require('./google/get_user2')

// github
const open_consent_screen_github = require('./github/open_consent_screen')
const get_accesstoken_github = require('./github/get_accesstoken')
const get_user_github = require('./github/get_user')
const get_user2_github = require('./github/get_user2')

// facebook
const open_consent_screen_facebook = require('./facebook/open_consent_screen')
const get_accesstoken_facebook = require('./facebook/get_accesstoken')
const get_user_facebook = require('./facebook/get_user')
const get_user2_facebook = require('./facebook/get_user2')

// twitter
const open_consent_screen_twitter = require('./twitter/open_consent_screen')
const get_accesstoken_twitter = require('./twitter/get_accesstoken')
const get_user_twitter = require('./twitter/get_user')
const get_user2_twitter = require('./twitter/get_user2')

// twitter
const open_consent_screen_instagram = require('./instagram/open_consent_screen')
const get_accesstoken_instagram = require('./instagram/get_accesstoken')
const get_user_instagram = require('./instagram/get_user')
const get_user2_instagram = require('./instagram/get_user2')

class Oauth {
    constructor() { }

    google = {
        open_consent_screen(options) {
            return open_consent_screen_google({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_google({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
        get_user(options) {
            return get_user_google({
                accesstoken: options?.accesstoken
            })
        },
        get_user2(options) {
            return get_user2_google({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
    }

    github = {
        open_consent_screen(options) {
            return open_consent_screen_github({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id
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
                accesstoken: options?.accesstoken
            })
        },
        get_user2(options) {
            return get_user2_github({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
    }

    facebook = {
        open_consent_screen(options) {
            return open_consent_screen_facebook({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                state: options?.state
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_facebook({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
        get_user(options) {
            return get_user_facebook({
                accesstoken: options?.accesstoken
            })
        },
        get_user2(options) {
            return get_user2_facebook({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
    }

    twitter = {
        open_consent_screen(options) {
            return open_consent_screen_twitter({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_twitter({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
        get_user(options) {
            return get_user_twitter({
                accesstoken: options?.accesstoken
            })
        },
        get_user2(options) {
            return get_user2_twitter({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
    }

    facebook = {
        open_consent_screen(options) {
            return open_consent_screen_instagram({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                state: options?.state
            })
        },
        get_accesstoken(options) {
            return get_accesstoken_instagram({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
        get_user(options) {
            return get_user_instagram({
                accesstoken: options?.accesstoken
            })
        },
        get_user2(options) {
            return get_user2_instagram({
                redirect_uri: options?.redirect_uri,
                client_id: options?.client_id,
                client_secret: options?.client_secret,
                code: options?.code,
            })
        },
    }
}

module.exports = Oauth

