import axios from 'axios'
import { IOption } from '../type'

async function get_user(options: IOption) {
    try {
        const url_get_user: string = "https://www.googleapis.com/oauth2/v2/userinfo"

        // use the access token to get user data
        const { data } = await axios.get(url_get_user, {
            headers: {
                Authorization: `Bearer ${options.accesstoken}`
            }
        })
        const user = {
            name: data.name,
            email: data.email,
            id: data.id,
            picture: data.picture
        }
        return { data: user };
    }
    catch (err: any) {
        if (err.response) {
            if (err.response.data) {
                if (err.response.data.error || err.response.data.error_description) {
                    const msg = `${err.response.data.error}, ${err.response.data.error_description}`
                    throw Error(msg)
                }
                else {
                    throw Error("Unknown error")
                }
            }
            else {
                throw Error("Unknown error")
            }
        }
        else {
            const msg = `${err.message}, ${err.name}`
            throw Error(msg)
        }
    }
}

export default get_user;