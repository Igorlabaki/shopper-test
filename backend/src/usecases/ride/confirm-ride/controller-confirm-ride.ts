import { Request, Response } from "express";

import { handleErrors } from "@/errors/error-handler";
import { ConfirmRideUseCase } from "./use-case-confirm-ride";
import { ConfirmRideRequestParams, confirmRideSchema } from "@/zod/ride/confirm-ride-params-schema";


class ConfirmRideController {
    constructor(private confirmRideUseCase: ConfirmRideUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const body: ConfirmRideRequestParams = req.body;
            // Validate the request parms
            confirmRideSchema.parse(body);

            // Esperar a execução do caso de uso
            await this.confirmRideUseCase.execute(body);
            // Retornar o token
            return resp.status(200).json({success: true});

        } catch (error) {
            // Chamar o handleErrors para formatar o erro
            const errorResponse = handleErrors(error);

            // Retornar a resposta formatada
            return resp.status(errorResponse.statusCode).json(errorResponse.body);
        }
    }
}

export { ConfirmRideController };