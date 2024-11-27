
import prismaClient from "@/service/prisma-client";

import { CreateCustumerUseCase } from "./use-case-create-review";
import { CreateCustumerController } from "./controller-create-custumer";
import { PrismaCustumerRepository } from "@/repositories/in-prisma/custumer-in-prisma-repository";

export const createCustumerFactory = (): CreateCustumerController => {
    const prismaCustumerRepository = new PrismaCustumerRepository(prismaClient);
    const createCustumerUseCase = new CreateCustumerUseCase(prismaCustumerRepository);
    const createCustumerController = new CreateCustumerController(createCustumerUseCase);

    return createCustumerController;
};
