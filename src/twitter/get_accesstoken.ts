import axios from "axios";
import { IOption } from "../type";
type DataType = {
  data: {
    access_token: string;
    name: string;
    picture: {
      data: {
        url: string;
      };
    };
    id: string;
    email: string;
  };
};

async function get_accesstoken(options: IOption) {
  const url_get_accesstoken: string =
    "https://api.twitter.com/2/oauth2/v4/token";

  if (!options.client_secret) throw new Error("client_secret is required");
  if (!options.redirect_uri) throw new Error("redirect_uri is required");
  if (!options.code) throw new Error("code is required");
  if (!options.client_id) throw new Error("client_id is required");

  try {
    const body = {
      grant_type: "authorization_code",
      code: options.code,
      client_id: options.client_id,
      client_secret: options.client_secret,
      redirect_uri: options.redirect_uri,
      code_verifier: "challenge", // should come from the client (included in the url that opens the consent screen)
    };
    const { data }: DataType = await axios.post(url_get_accesstoken, body, {
      withCredentials: false,
    });
    return data.access_token;
  } catch (err: any) {
    if (err.error) {
      if (err.error.error || err.error.error_description) {
        const msg = `${err.error.error}, ${err.error.error_description}`;
        throw Error(msg);
      } else {
        throw Error("Unknown error");
      }
    } else {
      const msg = `${err.message}, ${err.name}`;
      throw Error(msg);
    }
  }
}

export default get_accesstoken;
