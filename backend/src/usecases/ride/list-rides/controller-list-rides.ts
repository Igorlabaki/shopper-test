import { Request, Response } from "express";

import { handleErrors } from "@/errors/error-handler";
import { ListRideUseCase } from "./use-case-list-rides";
import { ListRidesRequestParams, listRidesSchema } from "@/zod/ride/list-ride-params-schema";

class ListRideController {
    constructor(private listRidesUseCase: ListRideUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const query : ListRidesRequestParams = listRidesSchema.parse(req.query);

            // Esperar a execução do caso de uso
            const response = await this.listRidesUseCase.execute(query);
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

export { ListRideController };