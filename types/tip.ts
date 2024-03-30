export type Tip = {
    uuid: string;
    verified: boolean;
    created: Date;
    updated: Date;
    message: string;
};

export type CreateTipRequest = {
    message: string;
};
