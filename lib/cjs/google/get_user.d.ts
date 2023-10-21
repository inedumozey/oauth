import { IOption } from '../type';
declare function get_user(options: IOption): Promise<{
    data: {
        name: any;
        email: any;
        id: any;
        picture: any;
    };
}>;
export default get_user;
