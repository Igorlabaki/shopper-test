
import prismaClient from "@/service/prisma-client";
import { CreateDriverUseCase } from "./use-case-create-driver";
import { CreateDriverController } from "./controller-create-driver";
import { PrismaDriverRepository } from "@/repositories/in-prisma/driver-in-prisma-repository";

export const createDriverFactory = (): CreateDriverController => {
    const prismaDriverRepository = new PrismaDriverRepository(prismaClient);
    const createDriverUseCase = new CreateDriverUseCase(prismaDriverRepository);
    const createDriverController = new CreateDriverController(createDriverUseCase);

    return createDriverController;
};
