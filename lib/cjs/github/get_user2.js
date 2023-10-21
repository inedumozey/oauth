"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_user_1 = __importDefault(require("./get_user"));
const axios_1 = __importDefault(require("axios"));
function get_user2(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const url_get_accesstoken = "https://github.com/login/oauth/access_token";
        if (!options.client_secret)
            throw new Error("client_secret is required");
        if (!options.code)
            throw new Error("code is required");
        if (!options.client_id)
            throw new Error("client_id is required");
        try {
            const body = {
                "code": options.code,
                "client_id": options.client_id,
                "client_secret": options.client_secret
            };
            const { data } = yield axios_1.default.post(url_get_accesstoken, body);
            if (data.includes('error')) {
                throw new Error(data);
            }
            const accesstoken = data.split("=")[1].split("&")[0];
            // fetch user data
            const { data: user } = yield (0, get_user_1.default)({ accesstoken });
            return user;
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
exports.default = get_user2;
//# sourceMappingURL=get_user2.js.map