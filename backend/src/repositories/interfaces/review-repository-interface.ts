import { CreateReviewRequestParams } from "@/zod/review/create-review-params-schema";
import { Review } from "@prisma/client";


export interface ReviewRepositoryInterface {
  list: () => Promise<Review[]  | null>
  delete: (params: string) => Promise<Review | null>
  getById: (params: string) => Promise<Review | null>
  /* update: (params: UpdateReviewRequestParams) => Promise<Review | null> */
  create: (params: CreateReviewRequestParams) => Promise<Review | null>
}