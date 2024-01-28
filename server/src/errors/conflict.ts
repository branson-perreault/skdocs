import { BaseError } from './error';

export class Conflict extends BaseError {
    protected static DEFAULT_CODE = 409;
    protected static DEFAULT_REASON = 'Conflict';
    protected static DEFAULT_MESSAGE = 'Document already exists';

    constructor(message?: string) {
        super(message || Conflict.DEFAULT_MESSAGE);
        this.code = Conflict.DEFAULT_CODE;
        this.reason = Conflict.DEFAULT_REASON;
    }
}
