import { IOption } from './type';
declare class Oauth {
    constructor();
    google: {
        open_consent_screen(options: IOption): void;
        get_accesstoken(options: IOption): Promise<any>;
        get_user(options: IOption): Promise<{
            data: {
                name: any;
                email: any;
                id: any;
                picture: any;
            };
        }>;
        get_user2(options: IOption): Promise<{
            name: any;
            email: any;
            id: any;
            picture: any;
        }>;
    };
    github: {
        open_consent_screen(options: IOption): void;
        get_accesstoken(options: IOption): Promise<any>;
        get_user(options: IOption): Promise<{
            data: {
                name: any;
                email: any;
                picture: any;
                id: any;
            };
        }>;
        get_user2(options: IOption): Promise<{
            name: any;
            email: any;
            picture: any;
            id: any;
        }>;
    };
    facebook: {
        open_consent_screen(options: IOption): void;
        get_accesstoken(options: IOption): Promise<any>;
        get_user(options: IOption): Promise<{
            data: {
                name: any;
                picture: any;
                id: any;
                email: any;
            };
        }>;
        get_user2(options: IOption): Promise<{
            name: any;
            picture: any;
            id: any;
            email: any;
        }>;
    };
    twitter: {
        open_consent_screen(options: IOption): void;
        get_accesstoken(options: IOption): Promise<any>;
        get_user(options: IOption): Promise<import("axios").AxiosResponse<any, any>>;
        get_user2(options: IOption): Promise<void>;
    };
}
export default Oauth;
