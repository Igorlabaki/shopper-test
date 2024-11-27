import prismaClient from "@/service/prisma-client";

import { ListDriversUseCase } from "./use-case-list-driver";
import { ListDriverController } from "./controller-list-driver";
import { PrismaDriverRepository } from "@/repositories/in-prisma/driver-in-prisma-repository";

export const listDriverFactory = () => {
  const prismaImageRepository = new PrismaDriverRepository(prismaClient);
  const listDriverUseCase = new ListDriversUseCase(prismaImageRepository);
  const listDriverController = new ListDriverController(listDriverUseCase);

  return listDriverController;
};
