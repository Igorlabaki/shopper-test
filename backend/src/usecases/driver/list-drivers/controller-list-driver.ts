import { Request, Response } from "express";

import { handleErrors } from "@/errors/error-handler";
import { ListDriversUseCase } from "./use-case-list-driver";

class ListDriverController {
    constructor(private listDriverUseCase: ListDriversUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            // Esperar a execução do caso de uso
            const response = await this.listDriverUseCase.execute();
            // Retornar o token
            return resp.status(200).json(response);

        } catch (error) {
            // Chamar o handleErrors para formatar o erro
            const errorResponse = handleErrors(error);

            // Retornar a resposta formatada
            return resp.status(errorResponse.statusCode).json(errorResponse.body);
        }
    }
}

export { ListDriverController };