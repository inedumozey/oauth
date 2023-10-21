function open_consent_screen(options) {
    const base_url = "https://www.facebook.com/v17.0/dialog/oauth";
    if (!options.client_id)
        throw new Error("client_id is required");
    if (!options.redirect_uri)
        throw new Error("redirect_uri is required!");
    const state = options.state ? options.state : "gg5354383ibeveteuu4bryyrfhrhhegeve";
    const url = `${base_url}?client_id=${options.client_id}&redirect_uri=${options.redirect_uri}&scope=email&state=${state}`;
    window.location.assign(url);
}
export default open_consent_screen;
//# sourceMappingURL=open_consent_screen.js.map