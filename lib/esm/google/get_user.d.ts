import { IOption } from "../type";
declare function get_user(options: IOption): Promise<{
    data: {
        name: string | undefined;
        email: string | undefined;
        id: string | undefined;
        picture: {
            data?: {
                url?: string | undefined;
            } | undefined;
        };
    };
}>;
export default get_user;
