import axios from "axios";
import { IOption, DataType } from "../type";

async function get_accesstoken(options: IOption) {
  const url_get_accesstoken: string =
    "https://github.com/login/oauth/access_token";

  if (!options.client_secret) throw new Error("client_secret is required");
  if (!options.code) throw new Error("code is required");
  if (!options.client_id) throw new Error("client_id is required");

  try {
    const body = {
      code: options.code,
      client_id: options.client_id,
      client_secret: options.client_secret,
    };
    const { data }: any = await axios.post(url_get_accesstoken, body);
    if (data.includes("error")) {
      throw new Error(data);
    }
    const token = data.split("=")[1].split("&")[0];
    return token;
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
