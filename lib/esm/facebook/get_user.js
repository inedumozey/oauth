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
function get_user(options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url_get_user = `https://graph.facebook.com/v2.9/me?fields=email,name,picture&access_token=${options.accesstoken}`;
            // use the access token to get user data
            const { data } = yield axios.get(url_get_user);
            const user = {
                name: data.name,
                picture: (_b = (_a = data === null || data === void 0 ? void 0 : data.picture) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.url,
                id: data.id,
                email: data.email,
            };
            return { data: user };
        }
        catch (err) {
            if (err.response) {
                if (err.response.data) {
                    if (err.response.data.error) {
                        const msg = `${err.response.data.error.message}`;
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
export default get_user;
//# sourceMappingURL=get_user.js.map