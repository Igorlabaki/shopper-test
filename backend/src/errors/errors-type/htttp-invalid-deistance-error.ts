export class HttpInvalidDistanceError extends Error {
    statusCode: number;
    name: string;
    message: string;
    
    constructor(message: string) {
        super(message);
        this.statusCode = 406;
        this.name = "INVALID_DISTANCE";
        this.message = `Quilometragem inválida para o motorista.`;
    }
}