import { IOption } from '../type';
declare function get_user(options: IOption): Promise<{
    data: {
        name: any;
        email: any;
        picture: any;
        id: any;
    };
}>;
export default get_user;
