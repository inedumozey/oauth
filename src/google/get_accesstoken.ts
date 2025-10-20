import axios from "axios";
import { IOption, DataType } from "../type";

async function get_accesstoken(options: IOption) {
  const url_get_accesstoken: string =
    "https://www.googleapis.com/oauth2/v4/token";
  // OR const url_get_accesstoken = "https://accounts.google.com/o/oauth2/token"

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
    };
    const { data }: DataType = await axios.post(url_get_accesstoken, body, {
      withCredentials: false,
    });
    return data.access_token;
  } catch (err: any) {
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.error || err.response.data.error_description) {
          const msg = `${err.response.data.error}, ${err.response.data.error_description}`;
          throw Error(msg);
        } else {
          throw Error("Unknown error");
        }
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
