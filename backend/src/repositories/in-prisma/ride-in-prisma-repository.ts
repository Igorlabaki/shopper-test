
import { PrismaClient, Ride } from "@prisma/client"
import { CreateRideRequestParams } from "../../zod/ride/confirm-ride-params-schema"
import { RideRepositoryInterface } from "../interfaces/ride-repository-interface"
import { connect } from "http2"
import { ListRidesRequestParams } from "@/zod/ride/list-ride-params-schema"


export class PrismaRideRepository implements RideRepositoryInterface {

  constructor(private readonly prisma: PrismaClient) { }

  async create(parms: CreateRideRequestParams): Promise<Ride | null> {
    const { custumer_id, driver, ...rest } = parms
    return await this.prisma.ride.create({
      data: {
        custumer: {
          connect: {
            id: custumer_id
          }
        },
        driver: {
          connect: {
            id: driver.id
          }
        },
        ...rest
      },
    })
  }

  /*  async update (reference: UpdateRideRequestParams): Promise<Ride  | null> {
     return await this.prisma.ride.update({
       where:{
         id: reference.rideId
       },
       data:{
         ...reference.data
       }
     })
   } */

  async getById(reference: string): Promise<Ride | null> {
    return await this.prisma.ride.findFirst({
      where: {
        id: reference
      }
    })
  }

  async delete(reference: string): Promise<Ride | null> {
    return await this.prisma.ride.delete({
      where: {
        id: reference
      }
    })
  }

  async list({ custumer_id, driver_id }: ListRidesRequestParams): Promise<Ride[] | null> {
    return await this.prisma.ride.findMany({
      where: {
        ...(driver_id && {
          driverId: driver_id
        }),
        custumerId: custumer_id
      },
    })
  }
}