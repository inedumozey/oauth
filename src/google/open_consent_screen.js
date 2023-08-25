function open_consent_screen(options) {
    const base_url = "https://accounts.google.com/o/oauth2/auth"
    const email_scope = "https://www.googleapis.com/auth/userinfo.email"
    const profile_scope = "https://www.googleapis.com/auth/userinfo.profile"

    if (!options.client_id) throw new Error("client_id is required");
    if (!options.redirect_uri) throw new Error("redirect_uri is required!");

    const url = `${base_url}?client_id=${options.client_id}&response_type=code&scope=${email_scope} ${profile_scope}&redirect_uri=${options.redirect_uri}`

    window.location.assign(url)
}

module.exports = open_consent_screen;