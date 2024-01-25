export class BaseError extends Error {
    protected static DEFAULT_CODE = 500;
    protected static DEFAULT_REASON = 'UnknownException';
    protected static DEFAULT_MESSAGE = 'Something went wrong';

    protected code: number;
    protected reason: string;

    constructor(message: string = null, code: number = null) {
        super(message || BaseError.DEFAULT_MESSAGE);
        this.code = code || BaseError.DEFAULT_CODE;
        this.reason = BaseError.DEFAULT_REASON;
    }

    public getCode(): number {
        return this.code;
    }

    public getReason(): string {
        return this.reason;
    }

    public getMessage(): string {
        return this.message;
    }
}
