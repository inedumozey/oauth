import { IOption } from "../type";
declare function get_user2(options: IOption): Promise<{
    name: string | undefined;
    email: string | undefined;
    picture: string | undefined;
    id: string | undefined;
}>;
export default get_user2;
