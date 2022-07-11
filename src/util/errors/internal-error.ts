export class InternalError extends Error {
    constructor(public msg: string, protected code: number = 500, protected description?: string){
        super(msg);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}