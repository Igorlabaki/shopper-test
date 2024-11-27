
import prismaClient from "@/service/prisma-client";
import { EstimateRideUseCase } from "./use-case-estimate-ride";
import { EstimateRideController } from "./controller-estimate-ride";
import { PrismaDriverRepository } from "@/repositories/in-prisma/driver-in-prisma-repository";

export const estimateRideFactory = (): EstimateRideController => {
    const prismaDriverRepository = new PrismaDriverRepository(prismaClient);
    const estimateRideUseCase = new EstimateRideUseCase(prismaDriverRepository);
    const estimateRideController = new EstimateRideController(estimateRideUseCase);

    return estimateRideController;
};
