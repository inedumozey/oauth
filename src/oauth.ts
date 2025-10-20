// google
import open_consent_screen_google from "./google/open_consent_screen";
import get_accesstoken_google from "./google/get_accesstoken";
import get_user_google from "./google/get_user";
import get_user2_google from "./google/get_user2";

// github
import open_consent_screen_github from "./github/open_consent_screen";
import get_accesstoken_github from "./github/get_accesstoken";
import get_user_github from "./github/get_user";
import get_user2_github from "./github/get_user2";

// facebook
import open_consent_screen_facebook from "./facebook/open_consent_screen";
import get_accesstoken_facebook from "./facebook/get_accesstoken";
import get_user_facebook from "./facebook/get_user";
import get_user2_facebook from "./facebook/get_user2";

// x
import open_consent_screen_x from "./x/open_consent_screen";
import get_accesstoken_x from "./x/get_accesstoken";
import get_user_x from "./x/get_user";
import get_user2_x from "./x/get_user2";

import { IOption } from "./type";

class Oauth {
  google: any = {
    open_consent_screen(options: IOption) {
      return open_consent_screen_google({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
      });
    },
    get_accesstoken(options: IOption) {
      return get_accesstoken_google({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
    get_user(options: IOption) {
      return get_user_google({
        accesstoken: options?.accesstoken,
      });
    },
    get_user2(options: IOption) {
      return get_user2_google({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
  };

  github: any = {
    open_consent_screen(options: IOption) {
      return open_consent_screen_github({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
      });
    },
    get_accesstoken(options: IOption) {
      return get_accesstoken_github({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
    get_user(options: IOption) {
      return get_user_github({
        accesstoken: options?.accesstoken,
      });
    },
    get_user2(options: IOption) {
      return get_user2_github({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
  };

  facebook: any = {
    open_consent_screen(options: IOption) {
      return open_consent_screen_facebook({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        state: options?.state,
      });
    },
    get_accesstoken(options: IOption) {
      return get_accesstoken_facebook({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
    get_user(options: IOption) {
      return get_user_facebook({
        accesstoken: options?.accesstoken,
      });
    },
    get_user2(options: IOption) {
      return get_user2_facebook({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
  };

  x: any = {
    open_consent_screen(options: IOption) {
      return open_consent_screen_x({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
      });
    },
    get_accesstoken(options: IOption) {
      return get_accesstoken_x({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
    get_user(options: IOption) {
      return get_user_x({
        accesstoken: options?.accesstoken,
      });
    },
    get_user2(options: IOption) {
      return get_user2_x({
        redirect_uri: options?.redirect_uri,
        client_id: options?.client_id,
        client_secret: options?.client_secret,
        code: options?.code,
      });
    },
  };
}

export default Oauth;
