import { CreateCustumerRequestParams } from "@/zod/custumer/create-custumer-params-schema";
import { Custumer } from "@prisma/client";


export interface CustumerRepositoryInterface {
  list: () => Promise<Custumer[]  | null>
  delete: (params: string) => Promise<Custumer | null>
  getById: (params: string) => Promise<Custumer | null>
  /* update: (params: UpdateCustumerRequestParams) => Promise<Custumer | null> */
  create: (params: CreateCustumerRequestParams) => Promise<Custumer | null>
}