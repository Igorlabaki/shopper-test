import { Request, Response } from "express";

import { CreateReviewUseCase } from "./use-case-create-review";

import { CreateReviewRequestParams, createReviewSchema } from "../../../zod/review/create-review-params-schema";
import { handleErrors } from "@/errors/error-handler";

class CreateReviewController {
    constructor(private createReviewUseCase: CreateReviewUseCase) { }

    async handle(req: Request, resp: Response) {
        try {
            const body: CreateReviewRequestParams = req.body;
            // Validate the request parms
            createReviewSchema.parse(body);

            // Esperar a execução do caso de uso
            const response = await this.createReviewUseCase.execute(body);
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

export { CreateReviewController };