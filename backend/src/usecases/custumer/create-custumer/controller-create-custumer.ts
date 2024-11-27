import { Request, Response } from "express";

import { handleErrors } from "@/errors/error-handler";
import { CreateCustumerUseCase } from "./use-case-create-review";
import { CreateCustumerRequestParams, createCustumerSchema } from "../../../zod/custumer/create-custumer-params-schema";

class CreateCustumerController {
    constructor(private createCustumerUseCase: CreateCustumerUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const body: CreateCustumerRequestParams = req.body;
            // Validate the request parms
            createCustumerSchema.parse(body);

            // Esperar a execução do caso de uso
            const response = await this.createCustumerUseCase.execute(body);
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

export { CreateCustumerController };