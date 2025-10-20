import axios from "axios";
import { IOption, DataType } from "../type";

async function get_user(options: IOption) {
  try {
    const url_get_user = `https://graph.facebook.com/v2.9/me?fields=email,name,picture&access_token=${options.accesstoken}`;

    // use the access token to get user data
    const { data }: DataType = await axios.get(url_get_user);
    const user = {
      name: data.name,
      picture: data.picture.data.url,
      id: data.id,
      email: data.email,
    };
    return { data: user };
  } catch (err: any) {
    if (err.response) {
      if (err.response.data) {
        if (err.response.data.error) {
          const msg = `${err.response.data.error.message}`;
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
export default get_user;
