import prismaClient from "@/service/prisma-client";


import { ListRideUseCase } from "./use-case-list-rides";
import { ListRideController } from "./controller-list-rides";
import { PrismaRideRepository } from "@/repositories/in-prisma/ride-in-prisma-repository";

export const listRideFactory = () => {
  const prismaImageRepository = new PrismaRideRepository(prismaClient);
  const listRideUseCase = new ListRideUseCase(prismaImageRepository);
  const listRideController = new ListRideController(listRideUseCase);

  return listRideController;
};
