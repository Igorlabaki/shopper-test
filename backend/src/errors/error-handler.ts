import { ZodError, ZodIssue } from "zod";
import { HttpBadRequestError } from "./errors-type/htttp-bad-request-error";


import { HttpResourceNotFoundError } from "./errors-type/http-resource-not-found-error";
import { HttpInvalidDistanceError } from "./errors-type/htttp-invalid-deistance-error";

export const handleErrors = (error: any) => {
    if (
        error instanceof HttpInvalidDistanceError ||
        error instanceof HttpBadRequestError ||
        error instanceof HttpResourceNotFoundError 

    ) {
        return {
            statusCode: error.statusCode,
            body: {
                error_code: error.name,
                error_description: error.message,
            }
        };
    }

    if (error instanceof ZodError) {
        const zodErrors = (error as ZodError).issues.map((issue: ZodIssue) => ({
            path: issue.path.join("."),
            message: issue.message,
        }));

        return {
            statusCode: 400,
            body: {
                error_code: "INVALID_DATA",
                error_description: "Os dados fornecidos no corpo da requisição são inválidos"
            }
        };
    }

    return {
        statusCode: 500,
        body: {
            errors: [
                {
                    title: "Server Error",
                    detail: error.toString(),
                }
            ]
        }
    };
};