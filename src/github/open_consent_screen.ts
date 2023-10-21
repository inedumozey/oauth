import { IOption } from '../type'

function open_consent_screen(options: IOption) {
    const base_url: string = 'https://github.com/login/oauth/authorize'

    if (!options.client_id) throw new Error("client_id is required");
    if (!options.redirect_uri) throw new Error("redirect_uri is required");

    const url = `${base_url}?client_id=${options.client_id}&redirect_uri=${options.redirect_uri}`

    window.location.assign(url)
}

export default open_consent_screen;
