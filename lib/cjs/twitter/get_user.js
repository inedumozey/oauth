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
const axios_1 = __importDefault(require("axios"));
function get_user(options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url_get_user = "";
            // use the access token to get user data
            const data = yield axios_1.default.get(url_get_user, {
                headers: {
                    Authorization: `Bearer ${options.accesstoken}`
                }
            });
            return data;
        }
        catch (err) {
            if (err.error) {
                if (err.error.error || err.error.error_description) {
                    const msg = `${err.error.error}, ${err.error.error_description}`;
                    throw Error(msg);
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
exports.default = get_user;
//# sourceMappingURL=get_user.js.map