var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
function get_accesstoken(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const url_get_accesstoken = "https://www.googleapis.com/oauth2/v4/token";
        // OR const url_get_accesstoken = "https://accounts.google.com/o/oauth2/token"
        if (!options.client_secret)
            throw new Error("client_secret is required");
        if (!options.redirect_uri)
            throw new Error("redirect_uri is required");
        if (!options.code)
            throw new Error("code is required");
        if (!options.client_id)
            throw new Error("client_id is required");
        try {
            const body = {
                grant_type: "authorization_code",
                code: options.code,
                client_id: options.client_id,
                client_secret: options.client_secret,
                redirect_uri: options.redirect_uri,
            };
            const { data } = yield axios.post(url_get_accesstoken, body, {
                withCredentials: false,
            });
            return data.access_token;
        }
        catch (err) {
            if (err.response) {
                if (err.response.data) {
                    if (err.response.data.error || err.response.data.error_description) {
                        const msg = `${err.response.data.error}, ${err.response.data.error_description}`;
                        throw Error(msg);
                    }
                    else {
                        throw Error("Unknown error");
                    }
                }
                else {
                    throw Error("Unknown error");
                }
            }
            else {
                const msg = `${err.message}, ${err.name}`;
                throw Error(msg);
            }
        }
    });
}
export default get_accesstoken;
//# sourceMappingURL=get_accesstoken.js.map