import { BaseError } from './error';

export class NotFound extends BaseError {
    protected static DEFAULT_CODE = 404;
    protected static DEFAULT_REASON = 'NotFound';
    protected static DEFAULT_MESSAGE = 'Something was not found';

    constructor(message?: string) {
        super(message || NotFound.DEFAULT_MESSAGE);
        this.code = NotFound.DEFAULT_CODE;
        this.reason = NotFound.DEFAULT_REASON;
    }
}
