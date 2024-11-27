
import prismaClient from "@/service/prisma-client";

import { ConfirmRideUseCase } from "./use-case-confirm-ride";
import { ConfirmRideController } from "./controller-confirm-ride";
import { PrismaRideRepository } from "@/repositories/in-prisma/ride-in-prisma-repository";
import { PrismaDriverRepository } from "@/repositories/in-prisma/driver-in-prisma-repository";

export const confirmRideFactory = (): ConfirmRideController => {
    const prismaRideRepository = new PrismaRideRepository(prismaClient);
    const prismaDriverRepository = new PrismaDriverRepository(prismaClient);
    const confirmRideUseCase = new ConfirmRideUseCase(prismaRideRepository,prismaDriverRepository);
    const confirmRideController = new ConfirmRideController(confirmRideUseCase);

    return confirmRideController;
};
