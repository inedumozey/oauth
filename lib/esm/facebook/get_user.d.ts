import { IOption } from "../type";
declare function get_user(options: IOption): Promise<{
    data: {
        name: string | undefined;
        picture: string | undefined;
        id: string | undefined;
        email: string | undefined;
    };
}>;
export default get_user;
