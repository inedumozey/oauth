import axios from 'axios'
import { IOption } from '../type'

async function get_user(options: IOption) {
    try {
        const url_get_user = ""

        // use the access token to get user data
        const data = await axios.get(url_get_user, {
            headers: {
                Authorization: `Bearer ${options.accesstoken}`
            }
        })
        return data;
    }
    catch (err: any) {
        if (err.error) {
            if (err.error.error || err.error.error_description) {
                const msg = `${err.error.error}, ${err.error.error_description}`
                throw Error(msg)
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