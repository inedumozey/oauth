import { IOption } from "../type";
declare function get_user2(options: IOption): Promise<{
    name: string | undefined;
    email: string | undefined;
    id: string | undefined;
    picture: {
        data?: {
            url?: string | undefined;
        } | undefined;
    };
}>;
export default get_user2;
