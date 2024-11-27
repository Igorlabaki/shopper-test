
import prismaClient from "@/service/prisma-client";

import { CreateReviewUseCase } from "./use-case-create-review";
import { CreateReviewController } from "./controller-create-review";
import { PrismaReviewRepository } from "@/repositories/in-prisma/review-in-prisma-repository";
import { PrismaCustumerRepository } from "@/repositories/in-prisma/custumer-in-prisma-repository";
import { PrismaDriverRepository } from "@/repositories/in-prisma/driver-in-prisma-repository";

export const createReviewFactory = (): CreateReviewController => {
    const prismaReviewRepository = new PrismaReviewRepository(prismaClient);
    const prismaDriverRepository = new PrismaDriverRepository(prismaClient);
    const prismaCustumerRepository = new PrismaCustumerRepository(prismaClient);
    const createReviewUseCase = new CreateReviewUseCase(prismaReviewRepository,prismaCustumerRepository,prismaDriverRepository);
    const createReviewController = new CreateReviewController(createReviewUseCase);

    return createReviewController;
};
