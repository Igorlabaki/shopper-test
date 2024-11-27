
import { PrismaClient, Driver } from "@prisma/client"
import { CreateDriverRequestParams } from "../../zod/driver/create-driver-params-schema"
import { DriverRepositoryInterface } from "../interfaces/driver-repository-interface"


export class PrismaDriverRepository implements DriverRepositoryInterface {

    constructor (private readonly prisma: PrismaClient){}
  
    async create (params: CreateDriverRequestParams): Promise<Driver | null> {
      return await this.prisma.driver.create({
        data:{
          ...params
        },
      })
    }
  
   /*  async update (reference: UpdateDriverRequestParams): Promise<Driver  | null> {
      return await this.prisma.driver.update({
        where:{
          id: reference.driverId
        },
        data:{
          ...reference.data
        }
      })
    } */

    async getById (reference: string): Promise<Driver  | null> {
      return await this.prisma.driver.findFirst({
        where:{
          id: reference
        }
      })
    }

    async delete (reference: string): Promise<Driver | null> {
      return await this.prisma.driver.delete({
        where:{
            id: reference
        }
      })
    }

    async list (): Promise<Driver[] | null> {
      return await this.prisma.driver.findMany({
        orderBy:{
          tax: "asc"
        },
      })
    }
  }