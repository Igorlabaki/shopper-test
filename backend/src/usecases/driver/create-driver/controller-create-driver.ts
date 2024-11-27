import { Request, Response } from "express";

import { CreateDriverUseCase } from "./use-case-create-driver";

import { CreateDriverRequestParams, createDriverSchema } from "../../../zod/driver/create-driver-params-schema";
import { handleErrors } from "@/errors/error-handler";

class CreateDriverController {
    constructor(private createDriverUseCase: CreateDriverUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const body: CreateDriverRequestParams = req.body;
            // Validate the request parms
            createDriverSchema.parse(body);

            // Esperar a execução do caso de uso
            const response = await this.createDriverUseCase.execute(body);
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

export { CreateDriverController };