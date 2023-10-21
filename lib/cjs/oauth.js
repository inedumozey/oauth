"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// google
const open_consent_screen_1 = __importDefault(require("./google/open_consent_screen"));
const get_accesstoken_1 = __importDefault(require("./google/get_accesstoken"));
const get_user_1 = __importDefault(require("./google/get_user"));
const get_user2_1 = __importDefault(require("./google/get_user2"));
// github
const open_consent_screen_2 = __importDefault(require("./github/open_consent_screen"));
const get_accesstoken_2 = __importDefault(require("./github/get_accesstoken"));
const get_user_2 = __importDefault(require("./github/get_user"));
const get_user2_2 = __importDefault(require("./github/get_user2"));
// facebook
const open_consent_screen_3 = __importDefault(require("./facebook/open_consent_screen"));
const get_accesstoken_3 = __importDefault(require("./facebook/get_accesstoken"));
const get_user_3 = __importDefault(require("./facebook/get_user"));
const get_user2_3 = __importDefault(require("./facebook/get_user2"));
// twitter
const open_consent_screen_4 = __importDefault(require("./twitter/open_consent_screen"));
const get_accesstoken_4 = __importDefault(require("./twitter/get_accesstoken"));
const get_user_4 = __importDefault(require("./twitter/get_user"));
const get_user2_4 = __importDefault(require("./twitter/get_user2"));
class Oauth {
    constructor() {
        this.google = {
            open_consent_screen(options) {
                return (0, open_consent_screen_1.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id
                });
            },
            get_accesstoken(options) {
                return (0, get_accesstoken_1.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
            get_user(options) {
                return (0, get_user_1.default)({
                    accesstoken: options === null || options === void 0 ? void 0 : options.accesstoken
                });
            },
            get_user2(options) {
                return (0, get_user2_1.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
        };
        this.github = {
            open_consent_screen(options) {
                return (0, open_consent_screen_2.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id
                });
            },
            get_accesstoken(options) {
                return (0, get_accesstoken_2.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
            get_user(options) {
                return (0, get_user_2.default)({
                    accesstoken: options === null || options === void 0 ? void 0 : options.accesstoken
                });
            },
            get_user2(options) {
                return (0, get_user2_2.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
        };
        this.facebook = {
            open_consent_screen(options) {
                return (0, open_consent_screen_3.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    state: options === null || options === void 0 ? void 0 : options.state
                });
            },
            get_accesstoken(options) {
                return (0, get_accesstoken_3.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
            get_user(options) {
                return (0, get_user_3.default)({
                    accesstoken: options === null || options === void 0 ? void 0 : options.accesstoken
                });
            },
            get_user2(options) {
                return (0, get_user2_3.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
        };
        this.twitter = {
            open_consent_screen(options) {
                return (0, open_consent_screen_4.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id
                });
            },
            get_accesstoken(options) {
                return (0, get_accesstoken_4.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
            get_user(options) {
                return (0, get_user_4.default)({
                    accesstoken: options === null || options === void 0 ? void 0 : options.accesstoken
                });
            },
            get_user2(options) {
                return (0, get_user2_4.default)({
                    redirect_uri: options === null || options === void 0 ? void 0 : options.redirect_uri,
                    client_id: options === null || options === void 0 ? void 0 : options.client_id,
                    client_secret: options === null || options === void 0 ? void 0 : options.client_secret,
                    code: options === null || options === void 0 ? void 0 : options.code,
                });
            },
        };
    }
}
exports.default = Oauth;
//# sourceMappingURL=oauth.js.map