function open_consent_screen(options) {
    const base_url = 'https://github.com/login/oauth/authorize'

    if (!options?.client_id) throw new Error("client_id is required");

    const url = `${base_url}?client_id=${options.client_id}`

    window.location.assign(url)
}

module.exports = open_consent_screen;
