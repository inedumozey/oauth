function open_consent_screen(options) {
    const base_url = "https://twitter.com/i/oauth2/authorize";
    if (!options.client_id)
        throw new Error("client_id is required");
    if (!options.redirect_uri)
        throw new Error("redirect_uri is required!");
    const scope = options.scope ? options.scope : 'users.read%20offline.access';
    const url = `${base_url}?response_type=code&client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&scope=${scope}&state=state&code_challenge=challenge&code_challenge_method=plain`;
    window.location.assign(url);
}
export default open_consent_screen;
//# sourceMappingURL=open_consent_screen.js.map