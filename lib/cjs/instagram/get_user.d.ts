import { IOption } from '../type';
declare function get_user(options: IOption): Promise<{
    data: {
        name: any;
        picture: any;
        id: any;
        email: any;
    };
}>;
export default get_user;
