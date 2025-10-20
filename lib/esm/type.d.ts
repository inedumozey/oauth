export interface IOption {
    redirect_uri?: string;
    client_id?: string;
    client_secret?: string;
    accesstoken?: string;
    code?: string;
    state?: string;
    scope?: string;
}
export interface DataType {
    data: {
        access_token?: string;
        name?: string;
        avatar_url?: string;
        picture: {
            data?: {
                url?: string;
            };
        };
        id?: string;
        email?: string;
    };
}
