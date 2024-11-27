
import { PrismaClient, Custumer } from "@prisma/client"
import { CreateCustumerRequestParams } from "../../zod/custumer/create-custumer-params-schema"
import { CustumerRepositoryInterface } from "../interfaces/custumer-repository-interface"
import { connect } from "http2"


export class PrismaCustumerRepository implements CustumerRepositoryInterface {

    constructor (private readonly prisma: PrismaClient){}
  
    async create (params: CreateCustumerRequestParams): Promise<Custumer | null> {
      return await this.prisma.custumer.create({
       data:{
        ...params
       }
      })
    }
  
   /*  async update (reference: UpdateCustumerRequestParams): Promise<Custumer  | null> {
      return await this.prisma.custumer.update({
        where:{
          id: reference.custumerId
        },
        data:{
          ...reference.data
        }
      })
    } */

    async getById (reference: string): Promise<Custumer  | null> {
      return await this.prisma.custumer.findFirst({
        where:{
          id: reference
        }
      })
    }

    async delete (reference: string): Promise<Custumer | null> {
      return await this.prisma.custumer.delete({
        where:{
            id: reference
        }
      })
    }

    async list (): Promise<Custumer[] | null> {
      return await this.prisma.custumer.findMany({
        
      })
    }
  }