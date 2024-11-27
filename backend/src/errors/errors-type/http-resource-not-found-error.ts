export class HttpResourceNotFoundError extends Error {
    statusCode: number;
    name: string;
    message: string;
    
    constructor(entity: string) {
        super(entity);
        this.statusCode = 404;
        this.name = `${entity}_NOT_FOUND`;
        this.message = `${entity} not found`;
    }
}