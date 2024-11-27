import { Request, Response } from "express";

import { handleErrors } from "@/errors/error-handler";
import { EstimateRideUseCase } from "./use-case-estimate-ride";
import { EstimateRideRequestParams, estimateRideSchema } from "@/zod/ride/estimate-ride-params-schema";

class EstimateRideController {
    constructor(private estimateRideUseCase: EstimateRideUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const body: EstimateRideRequestParams = req.body;
            // Validate the request parms
            estimateRideSchema.parse(body);

            // Esperar a execução do caso de uso
            const response = await this.estimateRideUseCase.execute(body);
            // Retornar o token
            return resp.status(201).json(response);

        } catch (error) {
            // Chamar o handleErrors para formatar o erro
            const errorResponse = handleErrors(error);

            // Retornar a resposta formatada
            return resp.status(errorResponse.statusCode).json(errorResponse.body);
        }
    }
}

export { EstimateRideController };