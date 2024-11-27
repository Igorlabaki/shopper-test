import { CreateRideRequestParams } from "@/zod/ride/confirm-ride-params-schema";
import { ListRidesRequestParams } from "@/zod/ride/list-ride-params-schema";
import { Ride } from "@prisma/client";


export interface RideRepositoryInterface {
  list: (params:ListRidesRequestParams) => Promise<Ride[]  | null>
  delete: (params: string) => Promise<Ride | null>
  getById: (params: string) => Promise<Ride | null>
  /* update: (params: UpdateRideRequestParams) => Promise<Ride | null> */
  create: (params: CreateRideRequestParams) => Promise<Ride | null>
}