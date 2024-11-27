
import { PrismaClient, Review } from "@prisma/client"
import { CreateReviewRequestParams } from "../../zod/review/create-review-params-schema"
import { ReviewRepositoryInterface } from "../interfaces/review-repository-interface"


export class PrismaReviewRepository implements ReviewRepositoryInterface {

    constructor (private readonly prisma: PrismaClient){}
  
    async create (params: CreateReviewRequestParams): Promise<Review | null> {
      const {driver_id,custumer_id, ...rest} = params
      return await this.prisma.review.create({
        data:{
          driver:{
            connect:{
              id: driver_id
            }
          },
          custumer:{
            connect:{
              id: custumer_id
            }
          },
          ...rest
        },
      })
    }
  
   /*  async update (reference: UpdateReviewRequestParams): Promise<Review  | null> {
      return await this.prisma.review.update({
        where:{
          id: reference.reviewId
        },
        data:{
          ...reference.data
        }
      })
    } */

    async getById (reference: string): Promise<Review  | null> {
      return await this.prisma.review.findFirst({
        where:{
          id: reference
        }
      })
    }

    async delete (reference: string): Promise<Review | null> {
      return await this.prisma.review.delete({
        where:{
            id: reference
        }
      })
    }

    async list (): Promise<Review[] | null> {
      return await this.prisma.review.findMany({
        
      })
    }
  }