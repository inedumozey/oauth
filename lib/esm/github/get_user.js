var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
function get_user(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url_get_user = "https://api.github.com/user";
            // use the access token to get user data
            const { data } = yield axios.get(url_get_user, {
                headers: {
                    Authorization: `Bearer ${options.accesstoken}`
                }
            });
            const user = {
                name: data.name,
                email: data.email,
                picture: data.avatar_url,
                id: data.id
            };
            return { data: user };
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
export default get_user;
//# sourceMappingURL=get_user.js.map