import { CreateDriverRequestParams } from "@/zod/driver/create-driver-params-schema";
import {Driver } from "@prisma/client";


export interface DriverRepositoryInterface {
  list: () => Promise<Driver[]  | null>
  delete: (params: string) => Promise<Driver | null>
  getById: (params: string) => Promise<Driver | null>
  /* update: (params: UpdateDriverRequestParams) => Promise<Driver | null> */
  create: (params: CreateDriverRequestParams) => Promise<Driver | null>
}